import React from 'react';
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import { upVote, deletePlant } from '../actions/plants'


const Plant = props => {
  const URL = 'http://localhost:3000/plants'

  return (
    <div className="ui centered card">
      
      <a className="image" href= {`${URL}/${props.plant.id}`}>
        <img src="{props.plant.img}"/>
      </a>
      <div className="content">
        <p className="header">{props.plant.name}</p>
      </div>
      <div class="center aligned description">
        <p>{props.plant.description}</p>
      </div>

      <div className="extra content">
          <div><i className="left floated circle icon">Water Frequency: {props.plant.water_level}/5</i></div>
          <div><i className="right floated circle outline icon">Light Frequency: {props.plant.light_level}/5</i></div>
      </div>

    </div>
  );
}


const mapDispatchToProps = {
  // upVote: upVote,
  deletePlant: deletePlant
}

export default connect(null, mapDispatchToProps)(Plant);