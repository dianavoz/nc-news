import { useContext } from 'react';
import { UserContext } from '../context/User';

import { Grid, Paper, Typography, ButtonBase } from '@mui/material';

import { styled } from '@mui/material/styles';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Users = () => {
  const { users } = useContext(UserContext);

  return (
    <section>
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
                <Grid container spacing={2} xs={{ display: 'block' }}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Img alt='complex' src={user.avatar_url} />
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
                          <span style={{ fontWeight: 'bold' }}>Username </span>
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
    </section>
  );
};
export default Users;
