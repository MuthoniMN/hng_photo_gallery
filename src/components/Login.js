import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return !isAuthenticated && <button onClick={() => loginWithRedirect()} className="bg-teal-400 px-5 text-white">Log In</button>;
};

export default Login;