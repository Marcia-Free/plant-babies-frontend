import { createPlantSuccess } from '../actions/plants'

import React from 'react'
import { connect } from 'react-redux'

class Form  extends React.Component {
  state = {
    user_id: 0,
    name: '',
    img: '',
    light_level: 0,
    water_level: 0,
    description: ''    
  }


  handleChange = (e) => {
      switch (e.target.name) {
        case 'user_id':
        case 'light_level':
        case 'water_level':
        return (
            this.setState({
            [e.target.name]: parseInt(e.target.value)
            })
        )
        default:
            return (
                this.setState({
                [e.target.name]: e.target.value
                })
            )

      }   
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({...this.state})
    }

    fetch('http://localhost:3001/plants', reqObj)
    .then(resp => resp.json())
    .then(newPlant => {
      this.setState({
        user_id: 0,
        name: '',
        img: '',
        light_level: 0,
        water_level: 0,
        description: '' 
      })

      this.props.createPlantSuccess(newPlant)

    })
    
  }


  render(){
    return (
            <form onSubmit={this.handleSubmit}>

                <div class="ui form">

                <div class="two fields">
                    <div className="field">
                        <label>Plant Owner ID</label>
                        <input type='text'  name='user_id' onChange={this.handleChange} value={this.state.user_id} />
                    </div>
                    <div className="field">
                        <label>Name</label>
                        <input type='text'  name='name' onChange={this.handleChange} value={this.state.name} />
                    </div>
                </div>

                    <div className="field">
                        <label>Image URL</label>
                        <input type='text'  name='img' onChange={this.handleChange} value={this.state.img} />
                    </div>

                <div class="two fields">
                    <div className="field">
                        <label>How much light does this plant prefer?</label>
                        <select multiple="" class="ui dropdown" name='light_level' onChange={this.handleChange} value={this.state.light_level}>
                            <option value="0">Sun Exposure</option>
                            <option value="1">1 - Dense Shade (No direct sunlight) </option>
                            <option value="2">2 - Full Shade (less than 1 hour of sun per day)</option>
                            <option value="3">3 - Partial Shade (2 hours of direct sun per day)</option>
                            <option value="4">4 - Light Shade (3-5 hours of direct sun)</option>
                            <option value="5">5 - Full Sun (At least 6 hours of sun per day)</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>How often does this plant need to be watered?</label>
                        <select multiple="" class="ui dropdown" name='water_level' onChange={this.handleChange} value={this.state.water_level}>
                            <option value="0">Watering Frequency</option>
                            <option value="1">1 - More than a month</option>
                            <option value="2">2 - Once every month</option>
                            <option value="3">3 - Every other week</option>
                            <option value="4">4 - Once a week</option>
                            <option value="5">5 - Every 2-3 days</option>
                        </select>
                    </div>
                </div>
         
                    <div class="field">
                        <label>Description</label>
                        <textarea type='text' name='description' onChange={this.handleChange} value={this.state.description}/>
                    </div>


                    <div class="ui success message">
                    <div class="header">{this.state.name} Saved</div>
                    <p>Your {this.state.name} has joined the other plant babies!</p>
                   </div>


                <button className="ui submit button" type='submit'>Submit</button>
                </div>

                
            </form>
    )
  }
}

const mapDispatchToProps = {
    createPlantSuccess: createPlantSuccess
}

export default connect(null, mapDispatchToProps)(Form)