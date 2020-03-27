import React, { useState } from "react";
import Form from "./Form";

export default function Bounty(props) {
  const { firstName, lastName, isAlive, bountyAmount, type, _id } = props;
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div className="bounty">
      {!editToggle ? (
        <>
          <h1>
            {firstName} {lastName}
          </h1>
          <p>{isAlive === true ? "Alive" : "Dead"}</p>
          <p>Bounty Amount: {bountyAmount}</p>
          <p>{type}</p>
          <button
            className="delete-btn"
            onClick={() => props.deleteBounty(_id)}
          >
            Delete
          </button>
          <button
            className="edit-btn"
            onClick={() => setEditToggle(prevToggle => !prevToggle)}
          >
            Edit
          </button>
        </>
      ) : (
        <>
          <Form
            firstName={firstName}
            lastName={lastName}
            bountyAmount={bountyAmount}
            type={type}
            _id={_id}
            btnText="Submit Text"
            submit={props.editBounty}
          />
          <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Close
          </button>
        </>
      )}
    </div>
  );
}
