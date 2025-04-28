import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Store registered users

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const isUserRegistered = (username, password) => {
    return users.some(user => user.username === username && user.password === password);
  };

  return (
    <UserContext.Provider value={{ users, addUser, isUserRegistered }}>
      {children}
    </UserContext.Provider>
  );
};