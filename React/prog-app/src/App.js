import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  // state is the property of your class
  state = {
    username: 'greatmoses',
    usingname: 'superbayo'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value,
    usingname: event.target.value});
  }
  render () {
  return (
    <div className="App">
      <UserInput changed={this.usernameChangedHandler}
      currentName={this.state.username}/>
      <UserOutput userName={this.state.username}/>
      <UserOutput  userName={this.state.usingname}/>
      <UserOutput userName="Bola"/>
    </div>
  );
  }
}

export default App;
