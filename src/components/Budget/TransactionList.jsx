import React from "react";
import TransactionTile from "./TransactionTile";

const TransactionList = ({ transactions }) => {
  if (transactions.length === 0) {
    return (
      <p className="text-center text-gray-600">No transactions available.</p>
    );
  }

  return (
    <div className="flex flex-wrap gap-4">
      {transactions
        .slice()
        .sort((a, b) => b.id - a.id) // Sort from latest to oldest
        .map((transaction) => (
          <div
            key={transaction.id}
            className="px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <TransactionTile transaction={transaction} />
          </div>
        ))}
    </div>
  );
};

export default TransactionList;
