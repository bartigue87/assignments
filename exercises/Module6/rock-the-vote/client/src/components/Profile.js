import React from "react";
import IssueForm from "./IssueForm.js";
import IssueList from "./IssueList.js";
import Issue from "./Issue.js";

export default function Profile() {
  return (
    <div className="profile">
      <h1>Welcome @Username!</h1>
      <h3>Add A Todo</h3>
      <IssueForm />
      <h3>Your Todos</h3>
    </div>
  );
}
