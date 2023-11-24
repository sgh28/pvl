import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../reducer/auth';

function NavBar() {
  
  // const person = useSelector(state => state.person);
  const dispatch = useDispatch()
  return <ul style={styles.navbar}>
      <li style={styles.navItem}>
        <Link to="/settings" style={styles.navLink}>
          Settings
        </Link>
      </li>
      <li style={styles.navItem}>
        <Link to="/people" style={styles.navLink}>
          People
        </Link>
      </li>
      <li>
        <Link onClick={dispatch(logout())} to="/" style={styles.navLink}>
          Logout
        </Link>
      </li>
    </ul>
 
  
}

const styles = {
  navbar: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    backgroundColor: '#333',
    overflow: 'hidden',
  },
  navItem: {
    float: 'left',
  },
  navLink: {
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
  },
};

export default NavBar;
