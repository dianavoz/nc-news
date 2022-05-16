import { useEffect, useState } from 'react';
import { getUsers } from '../utils/api';
import { useContext } from 'react';
import { UserContext } from '../context/User';
import { Link } from 'react-router-dom';

//styling
import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setIsLoggedIn } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
      setIsLoading(false);
    });
  }, []);

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
                  onClick={() => setIsLoggedIn(user)}
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
