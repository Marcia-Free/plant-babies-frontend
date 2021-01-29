import React from 'react';
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import {deletePlant } from '../actions/plants'
import {showPlant } from '../actions/plants'

const URL = 'http://localhost:3000/plants'
const URLback = 'http://localhost:3001/plants'

const PlantShow = props => {

  // const currentPlant = props.plants.map(plantObj => plantObj.id === state.)

  return (
    <div className="ui centered card" onClick={props.showPlant}>
      
      <a className="image">
        <img src="{props.plant.img}"/>
      </a>
      <div className="content">
        <p className="header">{props.name}</p>
      </div>
      <div class="center aligned description">
        <p>{props.description}</p>
      </div>

      <div className="extra content">
          <div><i className="left floated circle icon">Water Frequency: {props.water_level}/5</i></div>
          <div><i className="right floated circle outline icon">Light Frequency: {props.light_level}/5</i></div>
      </div>

    </div>
  );
}

const mapStateToProps= (storeState) => {
  return {
    plants: storeState.plants
  }
}

const mapDispatchToProps = {
  deletePlant: deletePlant,
}


export default connect(mapStateToProps, mapDispatchToProps)(PlantShow);