import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import axios from 'axios'
const ExchangeRate = () => {
  const [exchangeData, setExchangeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        setExchangeData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

  if (loading) {
    return (
        <Loading />
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600 text-lg font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 mb-5">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Exchange Rates</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 bg-gray-50 rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-4 text-left text-gray-700">Currency</th>
              <th className="border border-gray-300 p-4 text-left text-gray-700">Rate</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(exchangeData.rates).map(([currency, rate]) => (
              <tr key={currency} className="hover:bg-gray-100 transition duration-200">
                <td className="border border-gray-300 p-4 text-gray-600">{currency}</td>
                <td className="border border-gray-300 p-4 text-gray-600">{rate.toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExchangeRate;
