export interface Fruit {
  id: number;
  name: string;
  color: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface FruitResponse {
  data: Fruit[];
  page: number;
  totalPages: number;
}

export interface FruitFilters {
  orderBy?: "id" | "name" | "color" | "price";
  order?: "asc" | "desc";
}