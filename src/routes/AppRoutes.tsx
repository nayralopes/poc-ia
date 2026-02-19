import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../shared/components/Header';
import { VehicleListPage } from '../modules/vehicles/pages/VehicleListPage';
import { VehicleDetailPage } from '../modules/vehicles/pages/VehicleDetailPage';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<VehicleListPage />} />
          <Route path="/vehicles/:id" element={<VehicleDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
