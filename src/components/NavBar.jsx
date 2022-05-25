import { useState, useContext } from 'react';

import { Link } from 'react-router-dom';

//gives access to all the users
import { UserContext } from '../context/User';

//MUI styling
import { Button, Box, Toolbar, AppBar } from '@mui/material';
import { Home } from '@mui/icons-material';
import Topics from './Topics';

const NavBar = () => {
  const { user, setUser, users } = useContext(UserContext);
  const [toggle, setToggle] = useState(true);

  const randomUsername = users[Math.floor(Math.random() * users.length)];

  return (
    <nav className='news-header'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' style={{ backgroundColor: '#9EABB1' }}>
          <Toolbar>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Link to='/articles'>
                <h2 className='logo' style={{ color: '#6e6562' }}>
                  NC News
                </h2>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'right' } }}>
              <Button color='inherit'>
                <Link to='/'>
                  <Home sx={{ mr: 0.5 }} style={{ color: '#fff' }} />
                </Link>
              </Button>
              <Button color='inherit'>
                <Link to='/users'>
                  <span className='menu'>Users</span>
                </Link>
              </Button>
              <Topics />
              {toggle ? (
                <Button
                  color='inherit'
                  onClick={() =>
                    setUser({ username: `${randomUsername.username}` }) &
                    setToggle(!toggle)
                  }
                >
                  <span className='menu'>Login</span>
                </Button>
              ) : (
                <Button
                  color='inherit'
                  onClick={() => setUser({}) & setToggle(!toggle)}
                >
                  <span className='menu'>Logout</span>
                </Button>
              )}
              <span style={{ fontSize: 20, color: '#fff' }}>
                {user.username}
              </span>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
};

export default NavBar;
