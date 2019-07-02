import React from 'react';
import './App.css';
import Users from './components/Users';
import UserForm from './components/UserForm';
import Provider from './Provider';

function App() {
  return (
    <Provider>
      <div className="App card bg-light col-sm-8 p-3 ">
        <UserForm />
        <hr />
        <Users />
      </div>
    </Provider>
  );
}

export default App;
