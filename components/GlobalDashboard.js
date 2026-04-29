import { Calculator, Users, User, ArrowRight } from 'lucide-react';

export default function GlobalDashboard({ income, fixedCharges, persoTotal, sharedTotal }) {
  const sharedHalf = sharedTotal / 2;
  const totalOut = fixedCharges + persoTotal + sharedHalf;
  const balance = income - totalOut;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border-b-4 border-indigo-200 mb-8">
      <h2 className="text-xl font-black text-gray-800 mb-4 flex items-center gap-2">
        Vue Globale <Calculator className="text-indigo-500" />
      </h2>
      
      <div className="space-y-3">
        {/* Ligne Salaire */}
        <div className="flex justify-between items-center text-sm font-medium">
          <span className="text-gray-500">Salaire (Revenus)</span>
          <span className="text-green-600">+{income} €</span>
        </div>

        {/* Ligne Fixe */}
        <div className="flex justify-between items-center text-sm font-medium">
          <span className="text-gray-500">Abonnements & Fixe 🏠</span>
          <span className="text-red-400">-{fixedCharges} €</span>
        </div>

        {/* Ligne Perso */}
        <div className="flex justify-between items-center text-sm font-medium">
          <span className="text-gray-500">Mes dépenses Perso 👤</span>
          <span className="text-red-400">-{persoTotal} €</span>
        </div>

        {/* Ligne Commun divisé par 2 */}
        <div className="flex justify-between items-center text-sm font-medium border-b pb-2">
          <span className="text-gray-500">Ma part Commun (50%) 🤝</span>
          <span className="text-red-400">-{sharedHalf.toFixed(2)} €</span>
        </div>

        {/* Résultat Final */}
        <div className="flex justify-between items-center pt-2">
          <span className="font-bold text-gray-800">RESTE RÉEL 💸</span>
          <span className={`text-2xl font-black ${balance < 0 ? 'text-red-600' : 'text-indigo-600'}`}>
            {balance.toFixed(2)} €
          </span>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-indigo-50 rounded-2xl text-[11px] text-indigo-700 font-medium leading-tight">
        💡 Ce montant prend en compte tes charges fixes et la moitié du budget commun.
      </div>
    </div>
  );
}
