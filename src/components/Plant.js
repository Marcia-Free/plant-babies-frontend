import React from 'react';
import { connect } from 'react-redux'
import { upVote, deletePlant } from '../actions/plants'


const Plant = props => {

  return (
    <div className="ui centered card">
      
      <div className="image">
        <img src="{props.plant.img}"/>
      </div>
      <div className="content">
        <p className="header">{props.plant.name}</p>
      </div>
      <div class="center aligned description">
        <p>{props.plant.description}</p>
      </div>

      <div className="extra center aligned">
        <div data-rating="4" className="ui star rating"><i className="icon active"></i><i class="icon active"></i><i class="icon active"></i><i class="icon active"></i></div>
      </div>

    </div>
  );
}


const mapDispatchToProps = {
  // upVote: upVote,
  deletePlant: deletePlant
}

export default connect(null, mapDispatchToProps)(Plant);