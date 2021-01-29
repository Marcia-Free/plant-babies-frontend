import React, { Fragment } from 'react';
import logo from './logo.png';

import NavBar from './NavBar';
import Login from './Login';
import PlantList from './PlantList';
import PlantShow from './PlantShow';
import PlantEdit from './PlantEdit';
import Form from './Form';
import Title from './Title';

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
            <Route exact path={'/plants/new'} component={Form}/>
            <Route exact path={'/plants/:id'} component={PlantShow}/>
            <Route exact path={'/plants/edit/:id'} component={PlantEdit}/>
        </Switch>
    </header>
    <Title/>
  
    </Fragment>
  );
}

export default App;
