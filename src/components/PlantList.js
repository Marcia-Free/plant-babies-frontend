import React from 'react';
import Plant from './Plant';

import { connect } from 'react-redux'
import { fetchPlantsSuccess } from '../actions/plants'

import './App.css';


class PlantList extends React.Component {


  componentDidMount(){
    fetch('http://localhost:3001/plants')
    .then(resp => resp.json())
    .then(plants => {
      this.props.fetchPlantsSuccess(plants)

    })
  }

  renderPlants = () => {
    return this.props.plants.map(p => (
      <Plant plant={p} 
             key={p.id}
      />
    ));
  }

  render() {
    return (
      <div className="App">

  
      <div>
          <h1>Plant Babies</h1>
          
          <div className="ui link cards">
            {this.renderPlants()}
          </div>
      </div>
    </div>
    );
  }


}

//  mapStateToProps
//  ================
// - returns an obj with key/val pairs
// - those key/val pairs become props on the component that is being connected

const mapStateToProps= (storeState) => {
  return {
    plants: storeState.plants
  }
}

const mapDispatchToProps = {
  fetchPlantsSuccess: fetchPlantsSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(PlantList)
