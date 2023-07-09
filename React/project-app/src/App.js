import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import userInput from './UserInput/UserInput';
import userOutput from './UserOutput/UserOutput';


class App extends Component {
  render() {
  return (
    <div className="App">
      <UserInput/>
    <userOutput/>
    <userOutput/>
    <userOutput/>

    </div>
  );
}
}

export default App;
