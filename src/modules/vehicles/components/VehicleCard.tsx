import { Link } from 'react-router-dom';
import type { Vehicle } from '../types';
import { formatCurrency } from '../../../shared/utils/formatCurrency';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const fuelIcons: Record<Vehicle['fuel'], string> = {
  Gasolina: '⛽',
  Etanol: '🌿',
  Flex: '⚡',
  Diesel: '🛢️',
  Elétrico: '🔋',
  Híbrido: '♻️',
};

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <Link to={`/vehicles/${vehicle.id}`} className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl">
      <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={vehicle.image}
            alt={`${vehicle.brand} ${vehicle.model}`}
            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Year badge */}
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
            {vehicle.year}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
            {vehicle.brand} {vehicle.model}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5 mb-3">
            <span className="inline-flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {vehicle.location}
            </span>
          </p>

          {/* Chips */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              {fuelIcons[vehicle.fuel]} {vehicle.fuel}
            </span>
            <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              🔄 {vehicle.transmission}
            </span>
            <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              🛣️ {vehicle.mileage.toLocaleString('pt-BR')} km
            </span>
          </div>

          {/* Footer */}
          <div className="mt-auto flex items-end justify-between">
            <div>
              <p className="text-2xl font-extrabold text-blue-600 leading-none">
                {formatCurrency(vehicle.price)}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Preço à vista</p>
            </div>
            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
              Ver detalhes
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

