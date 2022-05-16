import { useState } from 'react';
import { createContext } from 'react';
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState({
    username: '',
  });

  // const isLoggedIn = user.username !== undefined;

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
};
