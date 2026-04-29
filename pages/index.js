import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import GlobalDashboard from '../components/GlobalDashboard';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

export default function Home() {
  const [persoExpenses, setPersoExpenses] = useState([]);
  const [sharedTotal, setSharedTotal] = useState(0);

  // --- CONFIGURATION À MODIFIER ---
  const income = 2500; // Ton salaire
  const fixedCharges = 950; // Loyer, abonnements, assurances...
  // --------------------------------

  const monthKey = `${new Date().getMonth() + 1}-${new Date().getFullYear()}`;

  useEffect(() => {
    // 1. Charger les dépenses perso
    const savedPerso = localStorage.getItem(`perso-${monthKey}`);
    if (savedPerso) setPersoExpenses(JSON.parse(savedPerso));

    // 2. Charger le total du commun pour le calcul global
    const savedShared = localStorage.getItem(`shared-${monthKey}`);
    if (savedShared) {
      const list = JSON.parse(savedShared);
      const total = list.reduce((acc, curr) => acc + curr.amount, 0);
      setSharedTotal(total);
    }
  }, []);

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

  const persoTotal = persoExpenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <Layout currentTab="perso">
      {/* Tableau de bord récapitulatif total */}
      <GlobalDashboard 
        income={income} 
        fixedCharges={fixedCharges} 
        persoTotal={persoTotal} 
        sharedTotal={sharedTotal} 
      />

      <div className="bg-pink-100/50 p-1 rounded-2xl mb-4">
        <h3 className="text-center text-[10px] font-bold text-pink-600 py-1 uppercase italic tracking-widest">
          Ajouter une dépense personnelle
        </h3>
      </div>
      
      <ExpenseForm onAdd={addPersoExpense} />
      <ExpenseList 
        items={persoExpenses} 
        title="Détails de mes achats 📝" 
        onDelete={deletePersoExpense} 
      />
    </Layout>
  );
}
