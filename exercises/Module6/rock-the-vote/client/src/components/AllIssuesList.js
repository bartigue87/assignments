import React, { useContext } from "react";
import Issue from "./Issue.js";
import { UserContext } from "../context/UserProvider.js";

export default function AllIssuesList(props) {
  const { getAllIssues } = useContext(UserContext);

  getAllIssues();
  const { allIssues } = props;
  return (
    <div className="issue-list">
      {allIssues.map((allIssue) => (
        <Issue {...allIssue} key={allIssue._id} />
      ))}
    </div>
  );
}
