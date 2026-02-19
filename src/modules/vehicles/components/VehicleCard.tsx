import { Link } from 'react-router-dom';
import type { Vehicle } from '../types';
import { formatCurrency } from '../../../shared/utils/formatCurrency';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <Link to={`/vehicles/${vehicle.id}`} className="block group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group-hover:-translate-y-1 transform transition-transform">
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {vehicle.brand} {vehicle.model}
          </h3>
          <p className="text-sm text-gray-500 mb-2">{vehicle.year}</p>
          <p className="text-xl font-bold text-blue-700 mb-2">
            {formatCurrency(vehicle.price)}
          </p>
          <div className="flex items-center text-sm text-gray-500 gap-1">
            <span>📍</span>
            <span>{vehicle.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
