import React from 'react';
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/auth'

class Login extends React.Component {
    state = {
        username: 'Username',
        password: 'Password',
        error: ''
      }

      handleInputChange = (e) => { 
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()
    
        const reqObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:  JSON.stringify(this.state)
        }

        fetch('http://localhost:3001/api/v1/auth', reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error){
        this.setState({
          error: data.error
        })
      } else {
        this.props.loginSuccess(data)
        this.props.history.push('/dashboard')
      }
    })
  }
    
  render(){
  return (
    <div className="Login">

    <div class="ui middle aligned center aligned grid">
  <div class="column">
  { this.state.error ? <h4 style={{color: 'red'}}>{this.state.error}</h4> : null}

    <form class="ui large form" onSubmit={this.handleSubmit}>
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input name={'username'} onChange={this.handleInputChange} value={this.state.username}/>
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input name={'password'} onChange={this.handleInputChange} value={this.state.password}/>
          </div>
        </div>
        <div class="ui fluid large blue submit button">Login</div>
      </div>

      <div class="ui error message"></div>

    </form>

  </div>


</div>

</div>
  );
}
}

const mapDispatchToProps = {
    loginSuccess: loginSuccess
  }

export default connect(null, mapDispatchToProps)(Login)