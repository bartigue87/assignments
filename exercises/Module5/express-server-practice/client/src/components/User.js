import React, { useState } from "react";
import UserForm from "./UserForm";

export default function User(props) {
  const { name, age, _id } = props;
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div className="user">
      {!editToggle ? (
        <>
          <h1>{name}</h1>
          <p>{age}</p>
          <button className="delete-btn" onClick={() => props.deleteUser(_id)}>
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
          <UserForm
            name={name}
            age={age}
            _id={_id}
            btnText="Submit Edit"
            submit={props.editUser}
          />
          <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Close
          </button>
        </>
      )}
    </div>
  );
}
