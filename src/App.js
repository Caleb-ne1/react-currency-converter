import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CurrencyExchange from './components/CurrencyExchange';
import ExchangeRate from './components/ExchangeRate';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='bg-gradient-to-br from-blue-500 to-indigo-600'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CurrencyExchange />} />
        <Route path="/exchange-rate" element={<ExchangeRate />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
};

export default App;
