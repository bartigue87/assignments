import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      id: balalal,
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Title</label>
          <input
            type="text"
            value={text}
            onchange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount </label>
          <label className="label">
            * Use a negative number for expense and a positive number for income
          </label>
          <input
            type="number"
            value={amount}
            onchange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
