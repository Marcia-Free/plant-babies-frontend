import React, { Fragment } from 'react';
import logo from './logo.png';

import NavBar from './NavBar';
import Login from './Login';
import PlantList from './PlantList';

import {Route, Switch} from 'react-router-dom';

import './App.css';


function App() {
  return (
    <Fragment>
    <header >
      <NavBar/>
            <Switch>
              <Route exact path={'/login'} component={Login}/>
              <Route exact path={'/plants'} component={PlantList}/>
        </Switch>
    </header>
    <body className="App-body">
    <div className="App">
    
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <div>        
          <div class="ui buttons">
          <button class="ui large button"><Link to='/login'>New User</Link></button>
          <div class="or"></div>
          <button class="ui large button"><Link to='/login'>Existing User</Link></button>
        </div> */}

        {/* </div> */}
 
  
    </div>
    </body>
    
    </Fragment>
  );
}

export default App;
