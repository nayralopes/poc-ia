import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight">🚗 AutoMarket</span>
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-200 transition-colors">Início</Link>
          <a href="#" className="hover:text-blue-200 transition-colors">Vender</a>
          <a href="#" className="hover:text-blue-200 transition-colors">Contato</a>
        </nav>
      </div>
    </header>
  );
}
