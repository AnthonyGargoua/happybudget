import { Calculator, ShieldCheck, Zap, PiggyBank, Star } from 'lucide-react';

export default function GlobalDashboard({ income, fixedCharges, persoTotal, sharedTotal }) {
  const sharedHalf = sharedTotal / 2;
  const balance = income - fixedCharges - persoTotal - sharedHalf;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border-t-4 border-indigo-500 mb-8 overflow-hidden relative">
      {/* Petit effet de fond */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-50 rounded-full opacity-50"></div>

      <div className="flex justify-between items-start mb-6 relative z-10">
        <div>
          <h2 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Reste disponible</h2>
          <div className={`text-4xl font-black tracking-tighter ${balance < 0 ? 'text-red-500' : 'text-slate-800'}`}>
            {balance.toFixed(2)} €
          </div>
        </div>
        <div className="bg-indigo-100 p-3 rounded-2xl text-indigo-600">
          <Calculator size={24} />
        </div>
      </div>
      
      <div className="space-y-3 mb-6 relative z-10">
        <div className="flex justify-between items-center bg-slate-50 p-3 rounded-2xl">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <ShieldCheck size={16} className="text-indigo-500" /> Charges & Abonnements
          </div>
          <span className="font-bold text-slate-700">-{fixedCharges.toFixed(2)} €</span>
        </div>
        
        <div className="flex justify-between items-center bg-slate-50 p-3 rounded-2xl">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <Zap size={16} className="text-cyan-500" /> Achats Perso + Commun
          </div>
          <span className="font-bold text-slate-700">-{ (persoTotal + sharedHalf).toFixed(2) } €</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 relative z-10">
        <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-2xl">
          <div className="flex items-center gap-1.5 text-emerald-700 text-[10px] font-bold uppercase mb-1">
            <PiggyBank size={14}/> Épargne (20%)
          </div>
          <p className="font-black text-emerald-600">{balance > 0 ? (balance * 0.2).toFixed(0) : 0}€</p>
        </div>
        <div className="bg-cyan-50 border border-cyan-100 p-3 rounded-2xl">
          <div className="flex items-center gap-1.5 text-cyan-700 text-[10px] font-bold uppercase mb-1">
            <Star size={14}/> Plaisir (30%)
          </div>
          <p className="font-black text-cyan-600">{balance > 0 ? (balance * 0.3).toFixed(0) : 0}€</p>
        </div>
      </div>
    </div>
  );
}
