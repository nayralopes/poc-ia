import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useVehiclesStore } from '../store';
import { formatCurrency } from '../../../shared/utils/formatCurrency';

const specIcons: Record<string, string> = {
  Ano: '📅',
  Km: '🛣️',
  Cor: '🎨',
  Câmbio: '🔄',
  Combustível: '⛽',
  Localização: '📍',
};

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
      <div className="flex flex-col justify-center items-center h-64 gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
        <p className="text-sm text-gray-500">Carregando veículo...</p>
      </div>
    );
  }

  const { brand, model, year, price, location, description, mileage, color, transmission, fuel, gallery } = selectedVehicle;

  const specs = [
    { label: 'Ano', value: year },
    { label: 'Km', value: mileage.toLocaleString('pt-BR') + ' km' },
    { label: 'Cor', value: color },
    { label: 'Câmbio', value: transmission },
    { label: 'Combustível', value: fuel },
    { label: 'Localização', value: location },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Início
        </Link>
        <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-800 font-medium">{brand} {model}</span>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">
          {brand} {model}
        </h1>
        <p className="text-gray-500 mt-1 flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <span className="text-gray-400">📅</span> {year}
          </span>
          <span className="text-gray-300">•</span>
          <span className="inline-flex items-center gap-1">
            <span className="text-gray-400">📍</span> {location}
          </span>
        </p>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-3 gap-2 mb-8 rounded-2xl overflow-hidden">
        {gallery.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${brand} ${model} - foto ${i + 1}`}
            className={`object-cover w-full ${i === 0 ? 'col-span-2 row-span-2 h-80' : 'h-[calc(10rem-4px)]'}`}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Details */}
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-600 rounded-full inline-block"></span>
              Sobre o veículo
            </h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-600 rounded-full inline-block"></span>
              Especificações
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {specs.map(({ label, value }) => (
                <div key={label} className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                    {specIcons[label]} {label}
                  </p>
                  <p className="text-sm font-semibold text-gray-800">{value}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Preço à vista</p>
            <p className="text-3xl font-extrabold text-blue-600 mb-1">{formatCurrency(price)}</p>
            <p className="text-xs text-gray-400 mb-6">ou consulte condições de financiamento</p>

            <button
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 active:scale-95 transition-all mb-3"
              onClick={() => alert('Em breve entraremos em contato!')}
            >
              Tenho interesse
            </button>
            <button
              className="w-full bg-white text-blue-600 border border-blue-200 py-3 px-4 rounded-xl font-semibold hover:bg-blue-50 active:scale-95 transition-all"
              onClick={() => alert('Agende um test drive!')}
            >
              Agendar test drive
            </button>

            <p className="text-xs text-gray-400 text-center mt-4">
              Sem compromisso. Resposta em até 24h.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
