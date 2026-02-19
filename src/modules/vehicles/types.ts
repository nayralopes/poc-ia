export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  location: string;
  image: string;
  description: string;
  mileage: number;
  color: string;
  transmission: 'Manual' | 'Automático';
  fuel: 'Gasolina' | 'Etanol' | 'Flex' | 'Diesel' | 'Elétrico' | 'Híbrido';
  gallery: string[];
}
