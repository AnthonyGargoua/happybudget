import Link from 'next/link';
import { User, Users } from 'lucide-react';

export default function Layout({ children, currentTab }) {
  return (
    <div className="min-h-screen bg-[#FFF5F7] pb-20">
      {/* Header avec Smileys */}
      <header className="pt-10 pb-6 text-center">
        <h1 className="text-4xl font-black text-pink-600 tracking-tight">
          HappyBudget <span className="inline-block animate-bounce">💸</span>
        </h1>
        <p className="text-pink-400 font-medium">Gère tes sous, garde le sourire ! ✨</p>
      </header>

      {/* Zone de contenu principal */}
      <main className="max-w-md mx-auto px-4">
        {children}
      </main>

      {/* Barre de navigation basse (Mobile style) */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md border border-white shadow-2xl rounded-full px-2 py-2 flex gap-2">
        <Link href="/">
          <button className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition ${currentTab === 'perso' ? 'bg-pink-500 text-white' : 'text-gray-500 hover:bg-pink-50'}`}>
            <User size={20} /> Perso
          </button>
        </Link>
        <Link href="/commun">
          <button className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition ${currentTab === 'commun' ? 'bg-indigo-500 text-white' : 'text-gray-500 hover:bg-indigo-50'}`}>
            <Users size={20} /> Commun
          </button>
        </Link>
      </nav>
    </div>
  );
}
