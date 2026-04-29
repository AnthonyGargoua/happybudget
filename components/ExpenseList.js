import { Trash2 } from 'lucide-react';

export default function ExpenseList({ items, title, onDelete }) {
  return (
    <div className="space-y-3 mb-24">
      <h3 className="text-lg font-bold text-gray-700 flex justify-between items-center px-2">
        {title}
        <span className="text-sm bg-white px-3 py-1 rounded-full shadow-sm text-gray-400">
          {items.length}
        </span>
      </h3>
      
      {items.length === 0 ? (
        <div className="text-center py-10 bg-white/50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 italic">Aucune dépense enregistrée... 🎈</p>
        </div>
      ) : (
        items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-sm border border-pink-50 animate-fadeIn">
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800 uppercase text-xs tracking-wider">{item.label}</span>
              <span className="text-[10px] text-gray-400 font-mono italic">{item.date}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-lg font-black text-pink-500">
                -{item.amount.toFixed(2)}€
              </div>
              <button 
                onClick={() => onDelete(item.id)}
                className="text-gray-300 hover:text-red-500 transition-colors p-1"
                title="Supprimer"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
