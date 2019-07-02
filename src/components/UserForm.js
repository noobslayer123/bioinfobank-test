import React, { Component } from 'react';
import Context from '../Context';
import Alert from './Alert';
import uuid from 'uuidv4';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      nickname: '',
      email: '',
      IP: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { id, nickname, email, IP } = this.state;
    const newUser = {
      id,
      nickname,
      email,
      IP
    };

    return (
      <Context.Consumer>
        {context => (
          <div className="card">
            <form
              onSubmit={e => {
                context.addUser(e, newUser);
                this.setState({
                  id: uuid(),
                  nickname: '',
                  email: '',
                  IP: ''
                });
              }}
              className={context.formClass}
            >
              <div className="form-group">
                <label className="text-info">Nickname: </label>
                <input
                  className="form-control"
                  type="text"
                  name="nickname"
                  value={nickname}
                  onChange={this.onChange}
                  minLength="5"
                  maxLength="20"
                  pattern="^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$"
                  required
                />
                <div className="valid-feedback">Go ahead!</div>
                <div className="invalid-feedback">
                  Check your nickname, please. (Only A-Z, 0-9, dash and
                  underscore allowed.)
                </div>
              </div>
              <div className="form-group">
                <label className="text-info">Email: </label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  maxLength="50"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  required
                />
                <div className="valid-feedback">You shall pass.</div>
                <div className="invalid-feedback">
                  You shall not pass! (Email is not valid)
                </div>
              </div>
              <div className="form-group">
                <label className="text-info">IP: </label>
                <input
                  className="form-control"
                  type="text"
                  name="IP"
                  value={IP}
                  onChange={this.onChange}
                  pattern="^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
                  required
                />
                <div className="valid-feedback">Please, continue.</div>
                <div className="invalid-feedback">Check your IP address.</div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={() => context.invalidInput()}
              >
                {' '}
                Add User
              </button>
            </form>
            <Alert
              type="alert alert-warning alert-dismissible fade show"
              body="User already exists."
              onClose={context.toogleUserAlreadyExists}
              show={context.userAlreadyExists}
            />
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default UserForm;
