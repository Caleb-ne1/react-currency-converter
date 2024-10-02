import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CurrencyDollarIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const CurrencyExchange = () => {
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('KES');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        setRates(response.data.rates);
      } catch (error) {
        console.error("Error fetching exchange rates", error);
      }
    };
    fetchExchangeRates();
  }, []);

  const convertCurrency = () => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const baseAmount = amount / rates[fromCurrency];
      const total = baseAmount * rates[toCurrency];
      setConvertedAmount(total);
    }
  };

  const formatAmount = (amount) => {
    return amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8 transition-transform duration-300 transform hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Currency Converter</h2>
        <div className="flex items-center mb-6">
          <CurrencyDollarIcon className="h-6 w-6 text-green-500 mr-2" />
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-200"
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="fromCurrency" className="text-sm font-medium text-gray-600 mb-1">From Currency</label>
          <select
            id="fromCurrency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-200"
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="toCurrency" className="text-sm font-medium text-gray-600 mb-1">To Currency</label>
          <select
            id="toCurrency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-200"
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={convertCurrency}
          className="flex items-center justify-center w-full bg-green-600 text-white rounded-md py-3 hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          <span className="mr-2">Convert</span>
          <ArrowRightIcon className="h-5 w-5" />
        </button>
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700">Converted Amount:</h3>
          <p className="text-2xl font-bold text-green-600">{formatAmount(convertedAmount)} {toCurrency}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyExchange;

