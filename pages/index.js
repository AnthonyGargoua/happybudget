import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import GlobalDashboard from '../components/GlobalDashboard';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

export default function Home() {
  const [persoExpenses, setPersoExpenses] = useState([]);
  const [sharedTotal, setSharedTotal] = useState(0);
  
  // États pour le salaire et les charges fixes
  const [income, setIncome] = useState(2500);
  const [fixedCharges, setFixedCharges] = useState(950);

  const monthKey = `${new Date().getMonth() + 1}-${new Date().getFullYear()}`;

  useEffect(() => {
    // 1. Charger les dépenses perso
    const savedPerso = localStorage.getItem(`perso-${monthKey}`);
    if (savedPerso) setPersoExpenses(JSON.parse(savedPerso));

    // 2. Charger le total du commun
    const savedShared = localStorage.getItem(`shared-${monthKey}`);
    if (savedShared) {
      const list = JSON.parse(savedShared);
      setSharedTotal(list.reduce((acc, curr) => acc + curr.amount, 0));
    }

    // 3. Charger le salaire et les charges sauvegardés
    const savedIncome = localStorage.getItem('user-income');
    const savedFixed = localStorage.getItem('user-fixed');
    if (savedIncome) setIncome(parseFloat(savedIncome));
    if (savedFixed) setFixedCharges(parseFloat(savedFixed));
  }, []);

  // Sauvegarder le salaire/charges quand ils changent
  const handleConfigChange = (type, value) => {
    const numValue = value === '' ? 0 : parseFloat(value);
    if (type === 'income') {
      setIncome(numValue);
      localStorage.setItem('user-income', numValue);
    } else {
      setFixedCharges(numValue);
      localStorage.setItem('user-fixed', numValue);
    }
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
      {/* Section réglages rapides */}
      <div className="bg-white rounded-3xl p-4 shadow-sm mb-4 border border-gray-100 flex gap-4">
        <div className="flex-1">
          <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">Salaire 💰</label>
          <input 
            type="number" 
            value={income} 
            onChange={(e) => handleConfigChange('income', e.target.value)}
            className="w-full bg-gray-50 p-2 rounded-xl border-none font-bold text-green-600 focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="flex-1">
          <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">Fixe/Abo 🏠</label>
          <input 
            type="number" 
            value={fixedCharges} 
            onChange={(e) => handleConfigChange('fixed', e.target.value)}
            className="w-full bg-gray-50 p-2 rounded-xl border-none font-bold text-red-500 focus:ring-2 focus:ring-red-400"
          />
        </div>
      </div>

      <GlobalDashboard 
        income={income} 
        fixedCharges={fixedCharges} 
        persoTotal={persoExpenses.reduce((acc, curr) => acc + curr.amount, 0)} 
        sharedTotal={sharedTotal} 
      />

      <ExpenseForm onAdd={addPersoExpense} />
      <ExpenseList items={persoExpenses} title="Mes achats 📝" onDelete={deletePersoExpense} />
    </Layout>
  );
}
