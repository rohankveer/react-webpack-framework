import React from 'react';
import { NavLink } from 'react-router-dom';

function Welcome() {
  return (<div>
    <nav class="nav nav-pills nav-justified">
      <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to='/'>Home</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to='/view'>Main Pages</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to='/error'>Error Pages</NavLink>
    </nav>
  </div>);
}

export {
  Welcome
};