import React, { useState, useEffect } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

const TransactionApp = () => {
  const [transactions, setTransactions] = useState([]);
  const [activeTab, setActiveTab] = useState("form");

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (storedTransactions) {
      setTransactions(storedTransactions);
    }
  }, []);

  const addTransaction = (transaction) => {
    const updatedTransactions = [...transactions, transaction];
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab("form")}
          className={`px-4 py-2 rounded-l-lg ${
            activeTab === "form" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Form
        </button>
        <button
          onClick={() => setActiveTab("transactions")}
          className={`px-4 py-2 rounded-r-lg ${
            activeTab === "transactions"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Transactions
        </button>
      </div>

      {activeTab === "form" && (
        <TransactionForm onAddTransaction={addTransaction} />
      )}
      {activeTab === "transactions" && (
        <TransactionList transactions={transactions} />
      )}
    </div>
  );
};

export default TransactionApp;
