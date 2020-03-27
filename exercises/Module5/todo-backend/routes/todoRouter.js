const express = require("express");
const todoRouter = express.Router();
const uuid = require("uuid/v4");

const todos = [
  {
    name: "The name",
    description: "The description of the todo",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuid()
  }
];

//Get all
todoRouter.get("/", (req, res) => {
  res.send(todos);
});

//Get one
todoRouter.get("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const foundTodo = todos.find(todo => todo._id === todoId);
  res.send(foundTodo);
});

//Post one
todoRouter.post("/", (req, res) => {
  const newTodo = req.body;
  newTodo._id = uuid();
  todos.push(newTodo);
  res.send("added");
});

//delete one
todoRouter.delete("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const todoIndex = todos.findIndex(todo => todo._id === todoId);
  todos.splice(todoIndex, 1);
  res.send("deleted");
});

//update one
todoRouter.put("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const todoIndex = todos.findIndex(todo => todo._id === todoId);
  const updatedTodo = Object.assign(todos[todoIndex], req.body);
  res.send(updatedTodo);
});

module.exports = todoRouter;
