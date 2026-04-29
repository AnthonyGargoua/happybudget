import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import GlobalDashboard from '../components/GlobalDashboard';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

const FIXED_ITEMS = [
  { id: 'loyer', label: 'Loyer', icon: '🏠' },
  { id: 'edf', label: 'EDF', icon: '⚡' },
  { id: 'box', label: 'Box Orange', icon: '🌐' },
  { id: 'tel', label: 'Forfait Téléphone', icon: '📱' },
  { id: 'assurance_v', label: 'Assurance Voiture', icon: '🚗' },
  { id: 'assurance_m', label: 'Assurance Moto', icon: '🏍️' },
  { id: 'pret_e', label: 'Prêt Étudiant', icon: '🎓' },
  { id: 'pret_v', label: 'Prêt Voiture', icon: '💸' },
  { id: 'sport', label: 'Salle de sport', icon: '💪' },
  { id: 'netflix', label: 'Netflix', icon: '🎬' },
  { id: 'disney', label: 'Disney+', icon: '🐭' },
  { id: 'amazon', label: 'Amazon Prime', icon: '📦' },
  { id: 'amex', label: 'American Express', icon: '💳' },
  { id: 'crunchy', label: 'Crunchyroll', icon: '🍣' },
  { id: 'darty', label: 'Darty Max', icon: '🛠️' },
  { id: 'apple_m', label: 'Apple Music', icon: '🎵' },
  { id: 'icloud', label: 'iCloud Apple', icon: '☁️' },
];

export default function Home() {
  const [persoExpenses, setPersoExpenses] = useState([]);
  const [sharedTotal, setSharedTotal] = useState(0);
  const [income, setIncome] = useState("");
  const [fixedValues, setFixedValues] = useState({});

  const monthKey = `${new Date().getMonth() + 1}-${new Date().getFullYear()}`;

  useEffect(() => {
    const savedPerso = localStorage.getItem(`perso-${monthKey}`);
    if (savedPerso) setPersoExpenses(JSON.parse(savedPerso));

    const savedShared = localStorage.getItem(`shared-${monthKey}`);
    if (savedShared) {
      const list = JSON.parse(savedShared);
      setSharedTotal(list.reduce((acc, curr) => acc + curr.amount, 0));
    }

    setIncome(localStorage.getItem('user-income') || "");
    const savedFixed = localStorage.getItem('user-fixed-values');
    if (savedFixed) setFixedValues(JSON.parse(savedFixed));
  }, []);

  const handleIncomeChange = (val) => {
    setIncome(val);
    localStorage.setItem('user-income', val);
  };

  const handleFixedChange = (id, val) => {
    const newValues = { ...fixedValues, [id]: val };
    setFixedValues(newValues);
    localStorage.setItem('user-fixed-values', JSON.stringify(newValues));
  };

  const totalFixed = Object.values(fixedValues).reduce((acc, curr) => acc + (parseFloat(curr) || 0), 0);
  const persoTotal = persoExpenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <Layout currentTab="perso">
      {/* SECTION SALAIRE */}
      <div className="bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-3xl p-6 shadow-lg mb-6 text-white">
        <label className="block text-xs font-bold uppercase opacity-80 mb-1 tracking-widest">Mon Salaire Mensuel 💰</label>
        <input 
          type="number" 
          placeholder="Entrer mon salaire..."
          value={income} 
          onChange={(e) => handleIncomeChange(e.target.value)}
          className="w-full bg-white/20 border-none rounded-2xl p-4 text-3xl font-black placeholder:text-white/50 focus:ring-2 focus:ring-white outline-none"
        />
      </div>

      <GlobalDashboard 
        income={parseFloat(income) || 0} 
        fixedCharges={totalFixed} 
        persoTotal={persoTotal} 
        sharedTotal={sharedTotal} 
      />

      {/* SECTION CHARGES FIXES */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 mb-8">
        <h3 className="font-black text-slate-700 mb-4 flex items-center gap-2 underline decoration-cyan-400">
          Mes Abonnements & Charges 🏠
        </h3>
        <div className="grid grid-cols-1 gap-3">
          {FIXED_ITEMS.map(item => (
            <div key={item.id} className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span className="text-sm font-bold text-slate-600 flex items-center gap-2">
                <span className="text-xl">{item.icon}</span> {item.label}
              </span>
              <input 
                type="number"
                placeholder="0 €"
                value={fixedValues[item.id] || ""}
                onChange={(e) => handleFixedChange(item.id, e.target.value)}
                className="w-24 bg-white border-none rounded-xl p-2 text-right font-bold text-cyan-600 focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-cyan-50 border-2 border-dashed border-cyan-200 p-4 rounded-3xl mb-6 text-center text-cyan-600 font-bold text-sm">
        🛒 Ajouter un achat imprévu / sortie
      </div>

      <ExpenseForm onAdd={(exp) => {
        const updated = [exp, ...persoExpenses];
        setPersoExpenses(updated);
        localStorage.setItem(`perso-${monthKey}`, JSON.stringify(updated));
      }} />
      
      <ExpenseList items={persoExpenses} title="Mes achats du jour 📝" onDelete={(id) => {
        const updated = persoExpenses.filter(e => e.id !== id);
        setPersoExpenses(updated);
        localStorage.setItem(`perso-${monthKey}`, JSON.stringify(updated));
      }} />
    </Layout>
  );
}
