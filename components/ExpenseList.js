import { Trash2 } from 'lucide-react';

export default function ExpenseList({ items, title, onDelete }) {
  return (
    <div className="space-y-3 mb-10">
      <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-2">
        {title} ({items.length})
      </h3>
      
      {items.length === 0 ? (
        <div className="text-center py-8 bg-slate-100/50 rounded-3xl border-2 border-dashed border-slate-200">
          <p className="text-slate-400 text-sm">Rien à signaler... ☕</p>
        </div>
      ) : (
        items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-sm border border-slate-50 animate-fadeIn">
            <div className="flex flex-col">
              <span className="font-bold text-slate-700 text-sm">{item.label}</span>
              <span className="text-[10px] text-slate-400 font-medium italic">{item.date}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-base font-black text-indigo-600">
                -{item.amount.toFixed(2)}€
              </div>
              <button 
                onClick={() => onDelete(item.id)}
                className="text-slate-200 hover:text-red-500 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
