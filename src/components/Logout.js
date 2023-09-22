import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { isAuthenticated } = useAuth0();
  const { logout } = useAuth0();

  return (
    isAuthenticated && <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="bg-teal-400 px-5 text-white">
      Log Out
    </button>
  );
};

export default LogoutButton;