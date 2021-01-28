import React from 'react';
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import { upVote, deletePlant } from '../actions/plants'

import PlantShow from './PlantShow';

const URL = 'http://localhost:3000/plants'
const URLback = 'http://localhost:3001/plants'


class Plant extends React.Component {


  handleRemove = () => {
    fetch(`${URLback}/${this.props.plant.id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(plant => {
      this.props.deletePlant(plant.id)
    })
  }

  render() {
    <Switch>
    <Route exact path={`/plants/${this.props.plant.id}`} component={PlantShow}/>
    </Switch>
    
  return (
    
    <div className="olive ui centered card">
      
      <a className="image" href= {`${URL}/${this.props.plant.id}`}>
        <img src={this.props.plant.img} />
      </a>
      <div className="content">
        <p className="header">{this.props.plant.name}</p>
      </div>
      <div class="center aligned description">
        <p>{this.props.plant.description}</p>
      </div>

      <div className="extra content">
          <div><i className="left floated circle icon">Water Frequency: {this.props.plant.water_level}/5</i></div>
          <div><i className="right floated circle outline icon">Light Frequency: {this.props.plant.light_level}/5</i></div>
      </div>
      <div class="ui two buttons">
        <div class="ui basic olive button">Edit</div>
        <div class="ui basic green button" onClick={this.handleRemove}>Delete</div>
      </div>

    </div>
  );
  }
}



const mapDispatchToProps = {
  // upVote: upVote,
  deletePlant: deletePlant
}

export default connect(null, mapDispatchToProps)(Plant);