import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Summary from '../components/Summary';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const income = 2200; // Tu pourras rendre ça modifiable plus tard !

  // Clé pour sauvegarder mois par mois (ex: "perso-4-2026")
  const monthKey = `perso-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;

  useEffect(() => {
    const saved = localStorage.getItem(monthKey);
    if (saved) setExpenses(JSON.parse(saved));
  }, []);

  const addExpense = (newExp) => {
    const updated = [newExp, ...expenses];
    setExpenses(updated);
    localStorage.setItem(monthKey, JSON.stringify(updated));
  };

  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <Layout currentTab="perso">
      <Summary income={income} total={total} />
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList items={expenses} title="Mes dépenses 📝" />
    </Layout>
  );
}
