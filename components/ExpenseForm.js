import { useState } from 'react';
import { PlusCircle } from 'lucide-react';

export default function ExpenseForm({ onAdd }) {
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!label || !amount) return;
    onAdd({ label, amount: parseFloat(amount), id: Date.now() });
    setLabel(''); setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-indigo-50 p-4 rounded-3xl mb-6">
      <div className="flex flex-col gap-2">
        <input 
          value={label} onChange={(e) => setLabel(e.target.value)}
          placeholder="Quoi ? (ex: Burger 🍔)" 
          className="p-3 rounded-xl border-none focus:ring-2 focus:ring-indigo-400"
        />
        <div className="flex gap-2">
          <input 
            type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
            placeholder="Prix (€)" 
            className="p-3 rounded-xl border-none flex-1 focus:ring-2 focus:ring-indigo-400"
          />
          <button type="submit" className="bg-indigo-500 text-white p-3 rounded-xl hover:bg-indigo-600 transition">
            <PlusCircle />
          </button>
        </div>
      </div>
    </form>
  );
}
