import { useEffect, useState } from 'react';
import { getUsers } from '../utils/api';

// //styling
import { Grid, Paper, Typography, ButtonBase } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material/styles';

import ErrorPage from './ErrorPage';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((usersFromApi) => {
        setUsers(usersFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) return <ErrorPage error={error} />;

  return (
    <section>
      {isLoading ? (
        <LoadingButton loading loadingIndicator='Loading...' variant='text'>
          Loading...
        </LoadingButton>
      ) : (
        <ul className='users-list'>
          {users.map((user) => {
            return (
              <li key={user.username}>
                <Paper
                  sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 500,
                    flexGrow: 1,
                    backgroundColor: '#fff',
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img
                          alt='complex'
                          src={user.avatar_url}
                          className='user'
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction='column' spacing={2}>
                        <Grid item xs>
                          <Typography
                            gutterBottom
                            variant='subtitle1'
                            component='div'
                          >
                            <span style={{ fontWeight: 'bold' }}>
                              Username{' '}
                            </span>
                            {user.username}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            <span style={{ fontWeight: 'bold' }}>name </span>{' '}
                            {user.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};
export default Users;
