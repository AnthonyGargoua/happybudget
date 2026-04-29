import Link from 'next/link';
import { User, Users, Wallet } from 'lucide-react';

export default function Layout({ children, currentTab }) {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="pt-12 pb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-3xl shadow-lg mb-4 text-white">
          <Wallet size={32} />
        </div>
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">
          HappyBudget
        </h1>
        <p className="text-slate-400 font-medium text-sm">Ma finance, mon contrôle ✨</p>
      </header>

      <main className="max-w-md mx-auto px-5">
        {children}
      </main>

      {/* Nav Basse */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-lg border border-slate-200 shadow-xl rounded-full p-2 flex gap-2 z-50">
        <Link href="/">
          <button className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition ${currentTab === 'perso' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}>
            <User size={18} /> Perso
          </button>
        </Link>
        <Link href="/commun">
          <button className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition ${currentTab === 'commun' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}>
            <Users size={18} /> Commun
          </button>
        </Link>
      </nav>
    </div>
  );
}
