import React from "react";

export default function Balance(props) {
  const { transactions, getUserTransaction } = props;

  getUserTransaction();

  console.log(transactions);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4 className="balance">Your Balance</h4>
      <h1 className="balance">${total}</h1>
    </>
  );
}
