import React, { Component } from 'react';
import Context from './Context';
import { find, sortBy } from 'lodash';

class Provider extends Component {
  state = {
    users: [
      {
        id: 1,
        nickname: 'stassnow',
        email: 'stas.snow@gmail.com',
        IP: '192.168.0.1'
      },
      {
        id: 2,
        nickname: 'usual_suspect',
        email: 'just.an.email@icloud.com',
        IP: '112.211.69.96'
      },
      {
        id: 3,
        nickname: 'his-dudeness',
        email: 'mr.lebowski@yahoo.com',
        IP: '173.137.24.25'
      }
    ],
    modalVisible: false,
    showBtn: true,
    userAlreadyExists: false,
    formClass: 'card-body needs-validation'
  };

  render() {
    const {
        users,
        modalVisible,
        formClass,
        showBtn,
        userAlreadyExists
      } = this.state,
      addUser = (e, user) => {
        e.preventDefault();

        if (
          find(users, { nickname: user.nickname }) ||
          find(users, { email: user.email })
        ) {
          toogleUserAlreadyExists();
        } else {
          this.setState({
            users: [...this.state.users, user],
            formClass: 'card-body needs-validation'
          });
        }
      },
      removeUser = id => {
        let usersList = [];

        if (!id) {
          this.setState({ users: usersList });
        } else {
          usersList = this.state.users.filter(user => user.id !== id);
          this.setState({ users: usersList });
        }
      },
      toogleModal = () => {
        this.setState({
          modalVisible: !this.state.modalVisible
        });
      },
      toogleUserAlreadyExists = () => {
        this.setState({ userAlreadyExists: !userAlreadyExists });
      },
      invalidInput = () => {
        this.setState({ formClass: 'card-body was-validated' });
      },
      sortData = param => {
        const { users } = this.state,
          sortedUsers = sortBy(users, param);
        this.setState({ users: sortedUsers });
      };

    return (
      <Context.Provider
        value={{
          users,
          addUser,
          removeUser,
          toogleModal,
          modalVisible,
          formClass,
          invalidInput,
          sortData,
          showBtn,
          userAlreadyExists,
          toogleUserAlreadyExists
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
