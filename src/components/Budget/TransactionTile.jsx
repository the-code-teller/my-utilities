import React from "react";
import { IconDelete, IconEdit } from "../commons/icons";

const TransactionTile = ({ transaction }) => {
  const {
    transactionType,
    category,
    otherCategory,
    amount,
    description,
    date,
    planned,
    expenseType,
  } = transaction;

  return (
    <div className="flex-grow md:flex-none w-full md:w-64 h-auto bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-bold text-xl capitalize">
          {category === "Other" ? otherCategory : category}
        </h4>
        <div className="flex">
          <IconEdit />
          <IconDelete />
        </div>
      </div>
      <div className="flex justify-between items-center text-md text-gray-600 italic mb-1">
        <p>{planned === "yes" ? "Planned" : "Unplanned"}</p>
        {transactionType === "expense" && <p>{expenseType}</p>}
        <h4 className="font-semibold capitalize not-italic">
          {transactionType}
        </h4>
      </div>
      <p className="text-xs text-gray-600 mb-1">{description}</p>
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold text-gray-600">₹{amount}</p>
        <p className="text-md text-gray-500 mt-2">{date}</p>
      </div>
    </div>
  );
};

export default TransactionTile;
