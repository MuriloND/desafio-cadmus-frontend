export interface SaleRecord {
  id: number;
  fruitName: string;
  color: string;
  quantity: number;
  unitPrice: number;
  total: number;
  lat: number;
  lng: number;
  soldAt: string;
}

export interface CordResponse {
  data: SaleRecord[];
  page: number;
  totalPages: number;
}