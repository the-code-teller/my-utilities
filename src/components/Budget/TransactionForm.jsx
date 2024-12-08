import React, { useState } from "react";
import InputField from "./InputField";

const TransactionForm = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState({
    transactionType: "expense",
    category: "",
    otherCategory: "",
    amount: "",
    description: "",
    date: "",
    planned: "",
    expenseType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddTransaction({ ...formData, id: Date.now() });
    setFormData({
      transactionType: "expense",
      category: "",
      otherCategory: "",
      amount: "",
      description: "",
      date: "",
      planned: "",
      expenseType: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Add Transaction
      </h2>
      <InputField
        label="Type"
        type="select"
        name="transactionType"
        value={formData.transactionType}
        onChange={handleChange}
        options={["expense", "income"]}
        show
        required
      />
      <InputField
        label="Category"
        type="select"
        name="category"
        value={formData.category}
        onChange={handleChange}
        options={
          formData.transactionType === "income"
            ? ["Salary", "Other"]
            : [
                "Clothes",
                "Food",
                "Grocery",
                "Electronics",
                "Movie",
                "Dine Out",
                "Liquor",
                "Rent",
                "Electricity",
                "Other",
              ]
        }
        show
        required
      />
      <InputField
        label="Other Category"
        type="text"
        name="otherCategory"
        value={formData.otherCategory}
        onChange={handleChange}
        placeholder="Enter category name"
        show={formData.category === "Other"}
        required
      />
      <InputField
        label="Amount"
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Enter amount"
        show
        required
      />
      <InputField
        label="Description"
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Optional"
        show
        required
      />
      <InputField
        label="Date"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        show
        required
      />
      <InputField
        label="Expense Type"
        type="radio"
        name="expenseType"
        value={formData.expenseType}
        onChange={handleChange}
        options={["Need", "Want", "Saving"]}
        show={formData.transactionType === "expense"}
        required
      />
      <InputField
        label="Planned"
        type="radio"
        name="planned"
        value={formData.planned}
        onChange={handleChange}
        options={["yes", "no"]}
        show
        required
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;
