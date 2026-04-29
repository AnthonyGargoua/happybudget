import { Calculator, PiggyBank, Heart } from 'lucide-react';

export default function GlobalDashboard({ income, fixedCharges, otherCharges, persoTotal, sharedTotal }) {
  const sharedHalf = sharedTotal / 2;
  // Le calcul total déduit absolument tout
  const totalOut = fixedCharges + otherCharges + persoTotal + sharedHalf;
  const balance = income - totalOut;

  const epargne = balance > 0 ? Math.floor(balance * 0.2) : 0;
  const plaisir = balance > 0 ? Math.floor(balance * 0.3) : 0;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border-b-4 border-indigo-200 mb-8">
      <h2 className="text-xl font-black text-gray-800 mb-4 flex items-center gap-2">
        Vue Globale <Calculator className="text-indigo-500" />
      </h2>
      
      <div className="space-y-2 border-b pb-4 mb-4">
        <div className="flex justify-between text-xs font-medium">
          <span className="text-gray-400">Revenus</span>
          <span className="text-green-600 font-bold">+{income} €</span>
        </div>
        <div className="flex justify-between text-xs font-medium">
          <span className="text-gray-400">Abonnements / Loyer</span>
          <span className="text-red-400">-{fixedCharges} €</span>
        </div>
        <div className="flex justify-between text-xs font-medium">
          <span className="text-gray-400">Autres dépenses prévues</span>
          <span className="text-orange-400">-{otherCharges} €</span>
        </div>
        <div className="flex justify-between text-xs font-medium">
          <span className="text-gray-400">Achats réels (Perso + Part Commun)</span>
          <span className="text-red-500">-{ (persoTotal + sharedHalf).toFixed(2) } €</span>
        </div>
        
        <div className="flex justify-between items-center pt-3 border-t mt-2">
          <span className="font-bold text-gray-800 uppercase text-[10px]">Reste à vivre instantané</span>
          <span className={`text-3xl font-black ${balance < 0 ? 'text-red-600' : 'text-indigo-600'}`}>
            {balance.toFixed(2)} €
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-green-50 p-3 rounded-2xl text-center border border-green-100">
          <PiggyBank className="mx-auto text-green-500 mb-1" size={18} />
          <p className="text-[9px] font-bold text-green-700 uppercase">Épargne possible</p>
          <p className="font-bold text-green-600 text-sm">{epargne}€</p>
        </div>
        <div className="bg-pink-50 p-3 rounded-2xl text-center border border-pink-100">
          <Heart className="mx-auto text-pink-500 mb-1" size={18} />
          <p className="text-[9px] font-bold text-pink-700 uppercase">Budget Plaisir</p>
          <p className="font-bold text-pink-600 text-sm">{plaisir}€</p>
        </div>
      </div>
    </div>
  );
}
