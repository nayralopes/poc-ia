import { Link, useNavigate } from 'react-router-dom';
import { useVehiclesStore } from '../../modules/vehicles/store';

export function Header() {
  const { filters, setFilters } = useVehiclesStore();
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate('/');
  }

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-5h14v5z" />
                <circle cx="7.5" cy="14.5" r="1.5" />
                <circle cx="16.5" cy="14.5" r="1.5" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">Auto<span className="text-blue-600">Market</span></span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xl hidden sm:flex">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Buscar marca, modelo..."
                value={filters.search}
                onChange={(e) => setFilters({ search: e.target.value })}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
          </form>

          {/* Nav */}
          <nav className="flex items-center gap-2 shrink-0">
            <Link to="/" className="hidden md:block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
              Início
            </Link>
            <a href="#" className="hidden md:block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
              Vender
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Anunciar
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
