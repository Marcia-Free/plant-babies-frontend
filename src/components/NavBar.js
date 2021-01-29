import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
    return (

<div class="ui vertical masthead center aligned segment">

<div class="ui container">
  <div class="ui menu">

    
    <a class="active item"><Link to='/'>Welcome Back Marcia!</Link></a>
    <a class="item"><Link to='/plants'>Plants</Link></a>
    <a class="item"><Link to='/plants/new'><i className = 'plus icon'></i></Link></a>
    
    <div class="right item">
      <a class="ui button"><Link to='/login'>Log in</Link></a>
      <a class="ui button">Sign Out</a>
    </div>
  </div>
</div>

</div>

    );
  }
  
  export default NavBar;