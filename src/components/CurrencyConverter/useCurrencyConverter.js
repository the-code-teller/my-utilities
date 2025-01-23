import CurrencyAPI from "@everapi/currencyapi-js";
import { useState } from "react";

const useCurrencyConverter = () => {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [currencies, setCurrencies] = useState([]);

  const client = new CurrencyAPI(
    "cur_live_RasveLyphgnAowCKJ2iV9vYDReR1Jl1HbBMQf0pD"
  );

  const fetchCurrencyList = async () => {
    const response = await client.currencies();
    setCurrencies(Object.keys(response?.data));
  };

  const convertCurrency = () => {
    client
      .latest({
        base_currency: fromCurrency,
        currencies: [toCurrency],
      })
      .then((response) => response.data)
      .then((data) => {
        setToAmount(
          (parseFloat(fromAmount) * data[toCurrency].value).toFixed(2)
        );
      });
  };

  return {
    fromAmount,
    setFromAmount,
    toAmount,
    setToAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    convertCurrency,
    fetchCurrencyList,
    currencies,
  };
};

export default useCurrencyConverter;
