import { Wallet, Heart, PiggyBank } from 'lucide-react';

export default function Summary({ income, total }) {
  const reste = income - total;
  const epargne = reste > 0 ? Math.floor(reste * 0.2) : 0;
  const plaisir = reste > 0 ? Math.floor(reste * 0.3) : 0;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-pink-100 mb-8">
      <div className="text-center mb-4">
        <h2 className="text-gray-500 text-sm font-bold uppercase tracking-widest">Reste à vivre 💰</h2>
        <span className={`text-5xl font-black ${reste < 0 ? 'text-red-500' : 'text-green-500'}`}>
          {reste}€
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-2xl text-center">
          <PiggyBank className="mx-auto text-green-500 mb-1" />
          <p className="text-xs font-bold text-green-700">ÉPARGNE (20%)</p>
          <p className="font-bold text-green-600">+{epargne}€</p>
        </div>
        <div className="bg-pink-50 p-4 rounded-2xl text-center">
          <Heart className="mx-auto text-pink-500 mb-1" />
          <p className="text-xs font-bold text-pink-700">PLAISIR (30%)</p>
          <p className="font-bold text-pink-600">{plaisir}€</p>
        </div>
      </div>
      
      <p className="mt-4 text-center text-sm italic text-gray-500">
        {reste > 500 ? "C'est le moment de se faire un petit cadeau ! 🎁" : "On garde un oeil sur le budget ! 🧐"}
      </p>
    </div>
  );
}
