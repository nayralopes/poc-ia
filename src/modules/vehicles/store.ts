import { create } from 'zustand';
import type { Vehicle } from './types';
import { vehiclesMock } from './mocks';

export interface VehicleFilters {
  search: string;
  brand: string;
  year: string;
  fuel: string;
  minPrice: number;
  maxPrice: number;
}

interface VehiclesState {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
  isLoading: boolean;
  filters: VehicleFilters;
  filteredVehicles: Vehicle[];
  fetchVehicles: () => void;
  selectVehicle: (id: string) => void;
  setFilters: (filters: Partial<VehicleFilters>) => void;
  resetFilters: () => void;
}

const DEFAULT_FILTERS: VehicleFilters = {
  search: '',
  brand: '',
  year: '',
  fuel: '',
  minPrice: 0,
  maxPrice: 0,
};

function applyFilters(vehicles: Vehicle[], filters: VehicleFilters): Vehicle[] {
  return vehicles.filter((v) => {
    if (
      filters.search &&
      !`${v.brand} ${v.model}`.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }
    if (filters.brand && v.brand !== filters.brand) return false;
    if (filters.year && v.year !== Number(filters.year)) return false;
    if (filters.fuel && v.fuel !== filters.fuel) return false;
    if (filters.minPrice > 0 && v.price < filters.minPrice) return false;
    if (filters.maxPrice > 0 && v.price > filters.maxPrice) return false;
    return true;
  });
}

export const useVehiclesStore = create<VehiclesState>((set, get) => ({
  vehicles: [],
  selectedVehicle: null,
  isLoading: false,
  filters: DEFAULT_FILTERS,
  filteredVehicles: [],
  fetchVehicles: () => {
    set({ isLoading: true });
    setTimeout(() => {
      const vehicles = vehiclesMock;
      set({ vehicles, filteredVehicles: vehicles, isLoading: false });
    }, 500);
  },
  selectVehicle: (id: string) => {
    const vehicle = get().vehicles.find((v) => v.id === id) ?? null;
    set({ selectedVehicle: vehicle });
  },
  setFilters: (partial: Partial<VehicleFilters>) => {
    const filters = { ...get().filters, ...partial };
    set({ filters, filteredVehicles: applyFilters(get().vehicles, filters) });
  },
  resetFilters: () => {
    set({ filters: DEFAULT_FILTERS, filteredVehicles: get().vehicles });
  },
}));
