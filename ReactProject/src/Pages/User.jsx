import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const staticAdmin = {
    username: "admin",
    password: "admin123",
    role: "admin",
  };

  const [users, setUsers] = useState(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const hasAdmin = storedUsers.some((u) => u.username === "admin");

    // Add admin only if it's not already present
    return hasAdmin ? storedUsers : [staticAdmin, ...storedUsers];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
  });

  const isLoggedIn = !!currentUser;

  // Save to localStorage on user state change
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [users, currentUser]);

  const register = (username, password) => {
    if (users.some((user) => user.username === username)) {
      return false; // User already exists
    }
    const newUser = { username, password, role: "user" };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    return true;
  };

  const login = (username, password) => {
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      setCurrentUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const isUserRegistered = (username, password) => {
    return users.some(
      (user) => user.username === username && user.password === password
    );
  };

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        isLoggedIn,
        currentUser,
        register,
        login,
        logout,
        isUserRegistered,
        addUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
