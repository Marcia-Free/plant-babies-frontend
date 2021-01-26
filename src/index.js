import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PlantBabies from './components/PlantBabies';
import Plant from './components/Plant';
import CareGuide from './components/CareGuide';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route path='/' component={App}/>
    <Route exact path='/plant_babies' component={PlantBabies}/>
    <Route exact path='/plant' component={Plant}/>
    <Route exact path='/care_guide' component={CareGuide}/>
  </Router>,

  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
