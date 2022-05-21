import { useEffect, useState } from 'react';
import { getUsers } from '../utils/api';
import { useContext } from 'react';
import { UserContext } from '../context/User';
import { Link } from 'react-router-dom';

//styling
import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import ErrorPage from './ErrorPage';

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
                <h3>{user.username}</h3>

                <Button
                  component={Link}
                  to='/articles'
                  variant='contained'
                  color='primary'
                  size='small'
                  onClick={() => setUser(user)}
                  style={{ backgroundColor: '#496175', color: '#dedede' }}
                >
                  Log me in
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};
export default Users;
