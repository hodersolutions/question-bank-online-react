import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
      <ul className="right">
          <li><NavLink to='/'>New Question</NavLink></li>
          <li><NavLink to='/'>Log Out</NavLink></li>
          <li><NavLink to='/'></NavLink></li>
          <li><NavLink to='/' className='btn btn-floating green lighten-1'>KK</NavLink></li>
      </ul>
    )
}

export default SignedInLinks;