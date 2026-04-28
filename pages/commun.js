import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

export default function Commun() {
  const [sharedExpenses, setSharedExpenses] = useState([]);
  const monthKey = `shared-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;

  useEffect(() => {
    const saved = localStorage.getItem(monthKey);
    if (saved) setSharedExpenses(JSON.parse(saved));
  }, []);

  const addExpense = (newExp) => {
    const updated = [newExp, ...sharedExpenses];
    setSharedExpenses(updated);
    localStorage.setItem(monthKey, JSON.stringify(updated));
  };

  const total = sharedExpenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <Layout currentTab="commun">
      <div className="bg-indigo-600 text-white rounded-3xl p-8 shadow-xl mb-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-indigo-100 text-xs font-bold uppercase tracking-[0.2em] mb-2">Total Commun 🤝</h2>
          <div className="text-5xl font-black">{total.toFixed(2)}€</div>
        </div>
        {/* Décoration de fond */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-500 rounded-full opacity-50"></div>
      </div>

      <ExpenseForm onAdd={addExpense} />
      <ExpenseList items={sharedExpenses} title="Achats partagés 🛒" />
    </Layout>
  );
}
