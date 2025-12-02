import React from 'react';
import AddEarningCard from '../components/Earnings/AddEarningCard';
import EarningTableCard from '../components/Earnings/EarningTableCard';
import '../styles/Expenses.css';
import { useState, useEffect } from 'react';
import { api } from '../utils/api.js';
import { getUser } from '../utils/auth.js';

const Earnings = () => {
  const [earnings, setEarnings] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = getUser();
  const userId = user?.id;

  const fetchEarnings = async () => {
    try {
      setLoading(true);
      const res = await api.earnings.getAll(userId);
      const data = await res.json();
      if (res.ok) {
        setEarnings(data);
      }
    } catch {
      // error handling
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) fetchEarnings();
  }, [userId]);

  if (!userId) {
    return <div className="earnings-page">Please login to view your earnings.</div>;
  }

  return (
    <div className="expenses-page-centered">
      <AddEarningCard userId={userId} onEarningAdded={fetchEarnings} />
      <EarningTableCard earnings={earnings} loading={loading} />
    </div>
  );
};

export default Earnings;
