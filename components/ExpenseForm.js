import { useState } from 'react';
import { PlusCircle } from 'lucide-react';

export default function ExpenseForm({ onAdd }) {
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!label || !amount) return;
    onAdd({ label, amount: parseFloat(amount), id: Date.now(), date: new Date().toLocaleDateString() });
    setLabel(''); setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 mb-6">
      <div className="flex flex-col gap-3">
        <input 
          value={label} onChange={(e) => setLabel(e.target.value)}
          placeholder="C'est quoi ? (ex: Resto 🍕)" 
          className="p-3.5 rounded-2xl bg-slate-50 border-none text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 outline-none transition"
        />
        <div className="flex gap-2">
          <input 
            type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
            placeholder="Montant (€)" 
            className="p-3.5 rounded-2xl bg-slate-50 border-none flex-1 text-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition font-bold"
          />
          <button type="submit" className="bg-indigo-600 text-white p-4 rounded-2xl hover:bg-indigo-700 transition shadow-lg active:scale-95">
            <PlusCircle size={24} />
          </button>
        </div>
      </div>
    </form>
  );
}
