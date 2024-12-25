import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BudgetOverview from '../components/budgetOverview/DashboardOverview'; // Import the BudgetOverview component

const Dashboard = () => {
  const [budgetOverview, setBudgetOverview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBudgetData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/budget/overview');
        setBudgetOverview(response.data);
      } catch (err) {
        console.error('Error fetching budget data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBudgetData();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <BudgetOverview budgetData={budgetOverview} /> {/* Pass data to BudgetOverview */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
