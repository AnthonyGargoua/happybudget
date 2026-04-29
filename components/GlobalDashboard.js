import { Calculator, ShieldCheck, Zap } from 'lucide-react';

export default function GlobalDashboard({ income, fixedCharges, persoTotal, sharedTotal }) {
  const sharedHalf = sharedTotal / 2;
  const balance = income - fixedCharges - persoTotal - sharedHalf;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border-t-4 border-cyan-400 mb-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Reste à vivre réel</h2>
          <div className={`text-4xl font-black ${balance < 0 ? 'text-red-500' : 'text-slate-800'}`}>
            {balance.toFixed(2)} €
          </div>
        </div>
        <div className="bg-cyan-100 p-3 rounded-2xl text-cyan-600">
          <Calculator size={24} />
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center bg-slate-50 p-3 rounded-2xl">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <ShieldCheck size={16} className="text-emerald-500" /> Charges Fixes Déduites
          </div>
          <span className="font-bold text-slate-700">-{fixedCharges.toFixed(2)} €</span>
        </div>
        
        <div className="flex justify-between items-center bg-slate-50 p-3 rounded-2xl">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <Zap size={16} className="text-orange-400" /> Achats du mois (Perso + Commun)
          </div>
          <span className="font-bold text-slate-700">-{ (persoTotal + sharedHalf).toFixed(2) } €</span>
        </div>
      </div>

      {balance > 0 && (
        <div className="mt-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
          <p className="text-emerald-700 text-xs font-bold uppercase tracking-wide">
            Bravo ! Tu es dans le vert 🌿
          </p>
        </div>
      )}
    </div>
  );
}
