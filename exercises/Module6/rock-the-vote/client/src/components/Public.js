import React, { useContext } from "react";
import AllIssuesList from "./AllIssuesList.js";
import Issue from "./Issue.js";
import { UserContext } from "../context/UserProvider.js";

export default function Profile() {
  const {
    user: { username },
    allIssues,
  } = useContext(UserContext);

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <AllIssuesList allIssues={allIssues} />
    </div>
  );
}
