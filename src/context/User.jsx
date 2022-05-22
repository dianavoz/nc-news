import { useState, useEffect } from 'react';
import { createContext } from 'react';

import { getUsers } from '../utils/api';
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    username: '',
  });

  useEffect(() => {
    getUsers()
      .then((usersFromApi) => {
        setUsers(usersFromApi);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
};
