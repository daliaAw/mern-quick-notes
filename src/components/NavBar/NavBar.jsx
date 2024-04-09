import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

function NavBar({user, setUser}) {
  // Add the following function
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <nav>
        <span className='welcome'>Welcome, {user.name}</span>
        <Link to="" onClick={handleLogOut}>Log Out</Link>

    </nav>
  )
}

export default NavBar