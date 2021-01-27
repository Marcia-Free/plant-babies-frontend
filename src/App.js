import React from 'react';
import logo from './logo.png';
import background from './parallex1.png';

import PlantBabies from './components/PlantBabies';
import Plant from './components/Plant';
import CareGuide from './components/CareGuide';
import Navbar from './components/NavBar';
import Login from './components/Login';
import {Route, Switch} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <BrowserRouter>
    <div className="App" >
      
      <Navbar/>
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        
        <div>        
          <div class="ui buttons">
          <button class="ui large button"><Link to='/login'>New User</Link></button>
          <div class="or"></div>
          <button class="ui large button"><Link to='/login'>Existing User</Link></button>
        </div>

          <Switch>
            <Route exact path='/plant_babies' component={PlantBabies}/>
            <Route exact path='/plant' component={Plant}/>
            <Route exact path='/care_guide' component={CareGuide}/>
            <Route exact path='/login' component={Login}/>
          </Switch>
        </div>

        
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
