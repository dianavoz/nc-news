import { useEffect, useState } from 'react';
import { getTopicsApi } from '../utils/api';
import { Link as RouterLink } from 'react-router-dom';
import ErrorPage from './ErrorPage';

import { Link, Button, Menu, MenuItem } from '@mui/material';

const Topics = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    getTopicsApi()
      .then((topic) => {
        setTopics(topic);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) return <ErrorPage error={error} />;

  return (
    <>
      <Button id='basic-button' color='inherit' onClick={handleClick}>
        <span className='menu'>Topics</span>
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {topics.map(({ slug }) => {
          return (
            <MenuItem onClick={handleClose} key={slug}>
              <Link
                component={RouterLink}
                underline='none'
                color='inherit'
                to={`/topics/${slug}`}
              >
                {slug}
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
export default Topics;
