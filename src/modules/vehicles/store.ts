import { create } from 'zustand';
import type { Vehicle } from './types';
import { vehiclesMock } from './mocks';

interface VehiclesState {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
  isLoading: boolean;
  fetchVehicles: () => void;
  selectVehicle: (id: string) => void;
}

export const useVehiclesStore = create<VehiclesState>((set, get) => ({
  vehicles: [],
  selectedVehicle: null,
  isLoading: false,
  fetchVehicles: () => {
    set({ isLoading: true });
    setTimeout(() => {
      set({ vehicles: vehiclesMock, isLoading: false });
    }, 500);
  },
  selectVehicle: (id: string) => {
    const vehicle = get().vehicles.find((v) => v.id === id) ?? null;
    set({ selectedVehicle: vehicle });
  },
}));
