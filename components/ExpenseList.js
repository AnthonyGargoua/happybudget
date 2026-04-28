export default function ExpenseList({ items, title }) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold text-gray-700 flex justify-between items-center px-2">
        {title}
        <span className="text-sm bg-white px-3 py-1 rounded-full shadow-sm text-gray-400">
          {items.length} dépense{items.length > 1 ? 's' : ''}
        </span>
      </h3>
      
      {items.length === 0 ? (
        <div className="text-center py-10 bg-white/50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 italic">Rien ici pour l'instant... 🎈</p>
        </div>
      ) : (
        items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-sm border border-pink-50 animate-fadeIn">
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800 uppercase text-sm tracking-wide">{item.label}</span>
              <span className="text-[10px] text-gray-400 font-mono italic">{item.date}</span>
            </div>
            <div className="text-lg font-black text-pink-500">
              -{item.amount.toFixed(2)}€
            </div>
          </div>
        ))
      )}
    </div>
  );
}
