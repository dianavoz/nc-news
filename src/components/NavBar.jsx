import { useEffect, useState, useContext } from 'react';
import { getTopicsApi } from '../utils/api';

//gives access to all the users
import { UserContext } from '../context/User';

//MUI styling
import { Link, Button, Menu, MenuItem, Box } from '@mui/material';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [topics, setTopics] = useState([]);

  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    getTopicsApi().then((topic) => {
      setTopics(topic);
    });
  }, []);

  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <Link
          underline='hover'
          component={Button}
          style={{ textDecoration: 'none' }}
          href='/'
        >
          <span className='menu'>Log In</span>
        </Link>

        <Button
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <span className='menu'>Topics</span>
        </Button>

        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link underline='hover' color='inherit' href='/articles'>
              All
            </Link>
          </MenuItem>

          {topics.map(({ slug }) => {
            return (
              <MenuItem onClick={handleClose} key={slug}>
                <Link
                  underline='hover'
                  color='inherit'
                  href={`/topics/${slug}`}
                >
                  {slug}
                </Link>
              </MenuItem>
            );
          })}
        </Menu>
        <span style={{ fontSize: 20, color: '#dedede' }}>
          {isLoggedIn.username}
        </span>
      </Box>
    </nav>
  );
};

export default NavBar;
