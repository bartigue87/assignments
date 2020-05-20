import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider.js";

export default function Navbar(props) {
  const { logout } = props;
  const {
    user: { username },
    addIssue,
    issues,
  } = useContext(UserContext);

  return (
    <div className="navbar">
      <h1>Welcome @{username}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
