import React from 'react';
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import {deletePlant } from '../actions/plants'
import { Link } from 'react-router-dom';

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
    
  return (
    
    <div className="olive ui centered card">
      
      <div className="content">
        <p className="header"><Link to= {`/plants/${this.props.plant.id}`}>{this.props.plant.name}</Link></p>
      </div>

      <a >
        <img className="ui fluid image" src={this.props.plant.img}/>
      </a>

      <div class="center aligned description">
        <p>{this.props.plant.description}</p>
      </div>

      <div className="extra content">
          <div><i className="left floated circle icon">Watering: {this.props.plant.water_level}/5</i></div>
          <div><i className="right floated circle outline icon">Sun: {this.props.plant.light_level}/5</i></div>
      </div>
      <div>
        <Link to= {`/plants/edit/${this.props.plant.id}`}><button class="ui basic olive button">Edit</button></Link>
        <div class="ui basic green button" onClick={this.handleRemove}>Delete</div>
      </div>

    </div>
  );
  }
}




const mapDispatchToProps = {
  deletePlant: deletePlant
}

export default connect(null, mapDispatchToProps)(Plant);