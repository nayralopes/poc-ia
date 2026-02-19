import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useVehiclesStore } from '../store';
import { formatCurrency } from '../../../shared/utils/formatCurrency';

export function VehicleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { vehicles, selectedVehicle, fetchVehicles, selectVehicle } = useVehiclesStore();

  useEffect(() => {
    if (vehicles.length === 0) {
      fetchVehicles();
    }
  }, [vehicles.length, fetchVehicles]);

  useEffect(() => {
    if (id && vehicles.length > 0) {
      selectVehicle(id);
    }
  }, [id, vehicles, selectVehicle]);

  if (!selectedVehicle) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700" />
      </div>
    );
  }

  const { brand, model, year, price, location, description, mileage, color, transmission, fuel, gallery } = selectedVehicle;

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <Link to="/" className="text-blue-600 hover:underline text-sm mb-6 inline-block">
        ← Voltar para listagem
      </Link>

      <h1 className="text-3xl font-bold text-gray-800 mb-1">
        {brand} {model}
      </h1>
      <p className="text-gray-500 mb-6">{year} · {location}</p>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {gallery.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${brand} ${model} - foto ${i + 1}`}
            className={`rounded-xl object-cover w-full ${i === 0 ? 'sm:col-span-2 h-64' : 'h-40'}`}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Details */}
        <div className="md:col-span-2 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Sobre o veículo</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Especificações</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Ano', value: year },
                { label: 'Km', value: mileage.toLocaleString('pt-BR') + ' km' },
                { label: 'Cor', value: color },
                { label: 'Câmbio', value: transmission },
                { label: 'Combustível', value: fuel },
                { label: 'Localização', value: location },
              ].map(({ label, value }) => (
                <div key={label} className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-medium text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="bg-white border border-gray-200 rounded-xl p-6 h-fit shadow-sm">
          <p className="text-3xl font-bold text-blue-700 mb-2">{formatCurrency(price)}</p>
          <p className="text-sm text-gray-500 mb-6">Preço à vista</p>
          <button
            className="w-full bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            onClick={() => alert('Em breve entraremos em contato!')}
          >
            Tenho interesse
          </button>
          <p className="text-xs text-gray-400 text-center mt-3">
            Sem compromisso. Apenas demonstre interesse.
          </p>
        </aside>
      </div>
    </main>
  );
}
