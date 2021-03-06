import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./components/User.js";
import UserForm from "./components/UserForm.js";

export default function App() {
  const [users, setUsers] = useState([]);

  function getUsers() {
    axios
      .get("/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err.response.data.errMsg));
  }

  function addUser(newUser) {
    axios
      .post("/users", newUser)
      .then(res => {
        setUsers(prevUsers => [...prevUsers, res.data]);
      })
      .catch(err => console.log(err));
  }

  function deleteUser(userId) {
    axios
      .delete(`/users/${userId}`)
      .then(res => {
        setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
      })
      .catch(err => console.log(err));
  }

  function editUser(updates, userId) {
    axios
      .put(`/users/${userId}`, updates)
      .then(res => {
        setUsers(prevUsers =>
          prevUsers.map(user => (user._id !== userId ? user : res.data))
        );
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="user-container">
        <UserForm submit={addUser} btnText="Add User" />
        {users.map(user => (
          <User
            {...user}
            key={user.name}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        ))}
      </div>
    </div>
  );
}
