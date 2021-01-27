import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (

<div class="ui vertical masthead center aligned segment">

<div class="ui container">
  <div class="ui menu">

    
    <a class="active item"><Link to='/'>Welcome Back User</Link></a>
    <a class="item"><Link to='/care_guide'>Care Guide</Link></a>
    <a class="item"><Link to='/plant_babies'>Plants</Link></a>
    <div class="right item">
      <a class="ui button">Log in</a>
      <a class="ui button">Sign Out</a>
    </div>
  </div>
</div>

</div>

    );
  }
  
  export default Navbar;