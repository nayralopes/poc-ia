import { useVehiclesStore } from '../store';
import type { Vehicle } from '../types';

interface FilterBarProps {
  vehicles: Vehicle[];
}

export function FilterBar({ vehicles }: FilterBarProps) {
  const { filters, setFilters, resetFilters } = useVehiclesStore();

  const brands = [...new Set(vehicles.map((v) => v.brand))].sort();
  const years = [...new Set(vehicles.map((v) => v.year))].sort((a, b) => b - a);
  const fuels = [...new Set(vehicles.map((v) => v.fuel))].sort();

  const hasActiveFilters =
    filters.brand || filters.year || filters.fuel || filters.minPrice > 0 || filters.maxPrice > 0;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <div className="flex flex-wrap items-end gap-3">
        {/* Brand */}
        <div className="flex flex-col gap-1 min-w-[140px]">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Marca</label>
          <select
            value={filters.brand}
            onChange={(e) => setFilters({ brand: e.target.value })}
            className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition cursor-pointer"
          >
            <option value="">Todas</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Year */}
        <div className="flex flex-col gap-1 min-w-[120px]">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Ano</label>
          <select
            value={filters.year}
            onChange={(e) => setFilters({ year: e.target.value })}
            className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition cursor-pointer"
          >
            <option value="">Todos</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        {/* Fuel */}
        <div className="flex flex-col gap-1 min-w-[140px]">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Combustível</label>
          <select
            value={filters.fuel}
            onChange={(e) => setFilters({ fuel: e.target.value })}
            className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition cursor-pointer"
          >
            <option value="">Todos</option>
            {fuels.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="flex flex-col gap-1 min-w-[130px]">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Preço mín.</label>
          <input
            type="number"
            placeholder="R$ 0"
            value={filters.minPrice || ''}
            onChange={(e) => setFilters({ minPrice: Number(e.target.value) })}
            className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />
        </div>

        <div className="flex flex-col gap-1 min-w-[130px]">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Preço máx.</label>
          <input
            type="number"
            placeholder="R$ 0"
            value={filters.maxPrice || ''}
            onChange={(e) => setFilters({ maxPrice: Number(e.target.value) })}
            className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />
        </div>

        {/* Reset */}
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="text-sm text-green-600 font-medium hover:text-green-800 transition-colors flex items-center gap-1 py-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Limpar filtros
          </button>
        )}
      </div>
    </div>
  );
}
