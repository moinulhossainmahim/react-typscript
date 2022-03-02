import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const handleLogin = () => {
    setIsLoggedin(true);
  };
  const handleLogout = () => {
    setIsLoggedin(false);
  };
  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedin ? "loggedin" : "loggedout"}</div>
    </>
  );
};
