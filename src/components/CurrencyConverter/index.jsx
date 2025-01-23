import React, { useEffect } from "react";
import Button from "../commons/Button";
import Modal from "../commons/Modal";
import CurrencyCard from "./CurrencyCard";
import useCurrencyConverter from "./useCurrencyConverter";
const CurrencyConverter = () => {
  const {
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
  } = useCurrencyConverter();

  useEffect(() => {
    fetchCurrencyList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      title="Currency Converter"
      className="text-2xl font-semibold text-blue-500 border-b border-blue-500"
      isOpen={true}
    >
      <div className="flex flex-col gap-3">
        <CurrencyCard
          name="from"
          amount={fromAmount}
          currency={fromCurrency}
          setAmount={setFromAmount}
          setCurrency={setFromCurrency}
          currencies={currencies}
        />
        <CurrencyCard
          name="to"
          amount={toAmount}
          currency={toCurrency}
          setAmount={setToAmount}
          setCurrency={setToCurrency}
          currencies={currencies}
        />
        <Button
          type="button"
          onClick={convertCurrency}
          className="rounded-lg bg-blue-500 border-blue-500 text-white w-full"
        >
          Convert {fromCurrency} to {toCurrency}
        </Button>
      </div>
    </Modal>
  );
};

export default CurrencyConverter;