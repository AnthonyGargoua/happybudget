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

  const deleteExpense = (id) => {
    const updated = sharedExpenses.filter(exp => exp.id !== id);
    setSharedExpenses(updated);
    localStorage.setItem(monthKey, JSON.stringify(updated));
  };

  const total = sharedExpenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <Layout currentTab="commun">
      <div className="bg-indigo-600 text-white rounded-3xl p-8 shadow-xl mb-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-indigo-100 text-xs font-bold uppercase tracking-[0.2em] mb-2 font-mono">
            Total Dépenses Communes 🤝
          </h2>
          <div className="text-5xl font-black">{total.toFixed(2)}€</div>
          <p className="mt-2 text-indigo-200 text-sm italic">
            Ma part à payer (50%) : {(total / 2).toFixed(2)}€
          </p>
        </div>
        {/* Décoration design */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500 rounded-full opacity-30"></div>
      </div>

      <div className="bg-indigo-100/50 p-1 rounded-2xl mb-4">
        <h3 className="text-center text-[10px] font-bold text-indigo-600 py-1 uppercase italic tracking-widest">
          Ajouter un achat commun
        </h3>
      </div>

      <ExpenseForm onAdd={addExpense} />
      <ExpenseList 
        items={sharedExpenses} 
        title="Liste des courses / frais 🛒" 
        onDelete={deleteExpense} 
      />
    </Layout>
  );
}
