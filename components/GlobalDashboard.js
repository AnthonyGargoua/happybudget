import { Calculator, PiggyBank, Heart } from 'lucide-react';

export default function GlobalDashboard({ income, fixedCharges, persoTotal, sharedTotal }) {
  const sharedHalf = sharedTotal / 2;
  const totalOut = fixedCharges + persoTotal + sharedHalf;
  const balance = income - totalOut;

  // Calculs plaisir/épargne basés sur le reste RÉEL
  const epargne = balance > 0 ? Math.floor(balance * 0.2) : 0;
  const plaisir = balance > 0 ? Math.floor(balance * 0.3) : 0;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border-b-4 border-indigo-200 mb-8">
      <h2 className="text-xl font-black text-gray-800 mb-4 flex items-center gap-2">
        Vue Globale <Calculator className="text-indigo-500" />
      </h2>
      
      <div className="space-y-3 border-b pb-4 mb-4">
        <div className="flex justify-between text-sm font-medium text-gray-500">
          <span>Salaire</span>
          <span className="text-green-600">+{income} €</span>
        </div>
        <div className="flex justify-between text-sm font-medium text-gray-500">
          <span>Charges Fixes</span>
          <span className="text-red-400">-{fixedCharges} €</span>
        </div>
        <div className="flex justify-between text-sm font-medium text-gray-500">
          <span>Perso + Part Commun</span>
          <span className="text-red-400">-( {persoTotal + sharedHalf} € )</span>
        </div>
        <div className="flex justify-between items-center pt-2 border-t">
          <span className="font-bold text-gray-800 uppercase text-xs">Reste à vivre réel</span>
          <span className={`text-3xl font-black ${balance < 0 ? 'text-red-600' : 'text-indigo-600'}`}>
            {balance.toFixed(2)} €
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-green-50 p-3 rounded-2xl text-center">
          <PiggyBank className="mx-auto text-green-500 mb-1" size={20} />
          <p className="text-[10px] font-bold text-green-700 uppercase">Épargne (20%)</p>
          <p className="font-bold text-green-600">{epargne}€</p>
        </div>
        <div className="bg-pink-50 p-3 rounded-2xl text-center">
          <Heart className="mx-auto text-pink-500 mb-1" size={20} />
          <p className="text-[10px] font-bold text-pink-700 uppercase">Plaisir (30%)</p>
          <p className="font-bold text-pink-600">{plaisir}€</p>
        </div>
      </div>
    </div>
  );
}
