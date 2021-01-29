import React, { Fragment } from 'react';
import logo from './logo.png';
import './App.css';


function Title() {
  return (
    <div className="App">
        <h1 class="ui header">Welcome to Plant Babies</h1>
        <img src={logo} className="App-logo" alt="logo" />
    </div>

  )

}

export default Title;