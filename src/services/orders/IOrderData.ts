export interface IOrderData {
  _id: string;
  sessionID: string;
  level: number;
  discount: number;
  weight: number;
  total: number;
  customer?: {
    id: string;
    name: string;
  };
  orderlines: {
    quantity: number;
    id: string;
    sku: string;
    title: string;
    price: number;
    sellingAt: number;
  }[];
  payment: {
    cash: number;
    transfer: number;
    creditline: number;
  };
  createdAt: Date;
} 
