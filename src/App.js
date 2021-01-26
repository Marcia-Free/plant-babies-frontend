import React from 'react';
import logo from './logo.svg';
import PlantBabies from './components/PlantBabies';
import Plant from './components/Plant';
import CareGuide from './components/CareGuide';
import './App.css';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>        
          <button type="button" class="btn btn-outline-primary">New User</button>
          <button type="button" class="btn btn-outline-primary">Existing User</button>
          <Switch>
            <Route exact path='/plant_babies' component={PlantBabies}/>
            <Route exact path='/plant' component={Plant}/>
            <Route exact path='/care_guide' component={CareGuide}/>
          </Switch>
        </div>

        
      </header>
    </div>
  );
}

export default App;
