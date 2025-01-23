import React from "react";
import { InputBox, InputSelect } from "../commons/inputs";

const CurrencyCard = ({
  name,
  amount,
  currency,
  setAmount,
  setCurrency,
  currencies,
}) => {
  return (
    <div className="flex justify-between border px-4 py-2 rounded-lg shadow-md">
      <InputBox
        type="number"
        name={name}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        label={name.charAt(0).toUpperCase() + name.slice(1)}
        placeholder={`Enter amount`}
      />
      <InputSelect
        name={name}
        options={currencies.map((currency) => ({
          value: currency,
          label: currency,
        }))}
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        label="Currency"
        className="bg-gray-200 rounded-lg"
      />
    </div>
  );
};

export default CurrencyCard;
