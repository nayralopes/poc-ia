import axios from 'axios';
import type { Vehicle } from '../types';
import { vehiclesMock } from '../mocks';

const BASE_URL = import.meta.env.VITE_API_URL || '';

export const vehicleService = {
  async getAll(): Promise<Vehicle[]> {
    if (!BASE_URL) {
      return Promise.resolve(vehiclesMock);
    }
    const { data } = await axios.get<Vehicle[]>(`${BASE_URL}/vehicles`);
    return data;
  },

  async getById(id: string): Promise<Vehicle | undefined> {
    if (!BASE_URL) {
      return Promise.resolve(vehiclesMock.find((v) => v.id === id));
    }
    const { data } = await axios.get<Vehicle>(`${BASE_URL}/vehicles/${id}`);
    return data;
  },
};
