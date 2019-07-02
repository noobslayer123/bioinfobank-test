import React, { Component } from 'react';
import Context from '../Context';
import Modal from './Modal';
import Button from './Button';
import './Users.css';

class Users extends Component {
  state = {
    id: ''
  };

  render() {
    return (
      <Context.Consumer>
        {context => (
          <>
            <table className="table">
              <thead>
                <tr className="text-info">
                  <th>
                    Nickname{' '}
                    <i
                      className="fas fa-arrow-down"
                      onClick={() => context.sortData('nickname')}
                    />
                  </th>
                  <th>
                    Email{' '}
                    <i
                      className="fas fa-arrow-down"
                      onClick={() => context.sortData('email')}
                    />
                  </th>
                  <th>
                    IP{' '}
                    <i
                      className="fas fa-arrow-down"
                      onClick={() => context.sortData('IP')}
                    />
                  </th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {context.users.map(user => (
                  <tr key={user.id} className="text-secondary">
                    <td>{user.nickname}</td>
                    <td>{user.email}</td>
                    <td>{user.IP}</td>
                    <td>
                      <i
                        className="fas fa-times"
                        onClick={() => {
                          context.toogleModal();
                          this.setState({ id: user.id });
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Button
              show={context.users.length > 0}
              type="btn btn-danger"
              body="Remove All Users"
              onTrigger={() => context.toogleModal()}
            />

            {/* // Remove User Modal */}
            <Modal
              show={context.modalVisible}
              body={context.modalBody}
              onClose={() => context.toogleModal()}
              onRemove={() => {
                context.removeUser(this.state.id);
                context.toogleModal();
                this.setState({ id: '' });
              }}
            />
          </>
        )}
      </Context.Consumer>
    );
  }
}

export default Users;
