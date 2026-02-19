import { useEffect } from 'react';
import { useVehiclesStore } from '../store';
import { VehicleCard } from '../components/VehicleCard';

export function VehicleListPage() {
  const { vehicles, isLoading, fetchVehicles } = useVehiclesStore();

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Encontre seu próximo carro</h1>
        <p className="text-gray-500">Os melhores veículos com os melhores preços</p>
      </section>

      {isLoading ? (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      )}
    </main>
  );
}
