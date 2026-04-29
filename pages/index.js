import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import GlobalDashboard from '../components/GlobalDashboard';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

export default function Home() {
  const [persoExpenses, setPersoExpenses] = useState([]);
  const [sharedTotal, setSharedTotal] = useState(0);
  
  // États pour les 3 piliers du budget
  const [income, setIncome] = useState(0);
  const [fixedCharges, setFixedCharges] = useState(0);
  const [otherCharges, setOtherCharges] = useState(0);

  const monthKey = `${new Date().getMonth() + 1}-${new Date().getFullYear()}`;

  useEffect(() => {
    const savedPerso = localStorage.getItem(`perso-${monthKey}`);
    if (savedPerso) setPersoExpenses(JSON.parse(savedPerso));

    const savedShared = localStorage.getItem(`shared-${monthKey}`);
    if (savedShared) {
      const list = JSON.parse(savedShared);
      setSharedTotal(list.reduce((acc, curr) => acc + curr.amount, 0));
    }

    // Charger les réglages
    setIncome(parseFloat(localStorage.getItem('user-income')) || 0);
    setFixedCharges(parseFloat(localStorage.getItem('user-fixed')) || 0);
    setOtherCharges(parseFloat(localStorage.getItem('user-other')) || 0);
  }, []);

  const handleConfigChange = (type, value) => {
    const numValue = value === '' ? 0 : parseFloat(value);
    if (type === 'income') { setIncome(numValue); localStorage.setItem('user-income', numValue); }
    if (type === 'fixed') { setFixedCharges(numValue); localStorage.setItem('user-fixed', numValue); }
    if (type === 'other') { setOtherCharges(numValue); localStorage.setItem('user-other', numValue); }
  };

  const addPersoExpense = (newExp) => {
    const updated = [newExp, ...persoExpenses];
    setPersoExpenses(updated);
    localStorage.setItem(`perso-${monthKey}`, JSON.stringify(updated));
  };

  const deletePersoExpense = (id) => {
    const updated = persoExpenses.filter(exp => exp.id !== id);
    setPersoExpenses(updated);
    localStorage.setItem(`perso-${monthKey}`, JSON.stringify(updated));
  };

  return (
    <Layout currentTab="perso">
      {/* Les 3 champs de réglage */}
      <div className="bg-white rounded-3xl p-4 shadow-sm mb-4 border border-gray-100 grid grid-cols-3 gap-2">
        <div>
          <label className="text-[9px] font-bold text-gray-400 uppercase ml-1">Salaire 💰</label>
          <input 
            type="number" value={income} 
            onChange={(e) => handleConfigChange('income', e.target.value)}
            className="w-full bg-gray-50 p-2 rounded-xl border-none font-bold text-green-600 text-sm focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div>
          <label className="text-[9px] font-bold text-gray-400 uppercase ml-1">Abo/Fixe 🏠</label>
          <input 
            type="number" value={fixedCharges} 
            onChange={(e) => handleConfigChange('fixed', e.target.value)}
            className="w-full bg-gray-50 p-2 rounded-xl border-none font-bold text-red-400 text-sm focus:ring-2 focus:ring-red-400"
          />
        </div>
        <div>
          <label className="text-[9px] font-bold text-gray-400 uppercase ml-1">Autres 🛒</label>
          <input 
            type="number" value={otherCharges} 
            onChange={(e) => handleConfigChange('other', e.target.value)}
            className="w-full bg-gray-50 p-2 rounded-xl border-none font-bold text-orange-400 text-sm focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      <GlobalDashboard 
        income={income} 
        fixedCharges={fixedCharges} 
        otherCharges={otherCharges}
        persoTotal={persoExpenses.reduce((acc, curr) => acc + curr.amount, 0)} 
        sharedTotal={sharedTotal} 
      />

      <div className="bg-white/50 p-1 rounded-2xl mb-4 border border-dashed border-pink-200 text-center">
         <p className="text-[10px] font-bold text-pink-500 uppercase italic tracking-widest">
           Ajouter un achat (Sorties, imprévus...) 🚀
         </p>
      </div>

      <ExpenseForm onAdd={addPersoExpense} />
      <ExpenseList items={persoExpenses} title="Historique du mois 📝" onDelete={deletePersoExpense} />
    </Layout>
  );
}
