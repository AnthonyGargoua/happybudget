import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import GlobalDashboard from '../components/GlobalDashboard';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

export default function Home() {
  const [persoExpenses, setPersoExpenses] = useState([]);
  const [sharedTotal, setSharedTotal] = useState(0);
  
  // Paramètres (tu pourras ajouter un bouton pour les modifier plus tard)
  const income = 2500; 
  const fixedCharges = 800; // Assurances, loyer, netflix...

  const monthKey = `${new Date().getMonth() + 1}-${new Date().getFullYear()}`;

  useEffect(() => {
    // Charger le perso
    const savedPerso = localStorage.getItem(`perso-${monthKey}`);
    if (savedPerso) setPersoExpenses(JSON.parse(savedPerso));

    // Charger le commun juste pour le calcul
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

  const persoTotal = persoExpenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <Layout currentTab="perso">
      {/* Le nouveau tableau récapitulatif */}
      <GlobalDashboard 
        income={income} 
        fixedCharges={fixedCharges} 
        persoTotal={persoTotal} 
        sharedTotal={sharedTotal} 
      />

      <div className="bg-pink-100/50 p-1 rounded-2xl mb-6">
        <h3 className="text-center text-xs font-bold text-pink-600 py-1 uppercase italic">Ajouter une dépense perso</h3>
      </div>
      
      <ExpenseForm onAdd={addPersoExpense} />
      <ExpenseList items={persoExpenses} title="Détails de mes achats 📝" />
    </Layout>
  );
}
