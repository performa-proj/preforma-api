export interface IProduct {
  _id: string;
  sku: string;
  title: string;
  weight: number;
  price: number;
  priceStructID: string;
  levels: (number | null)[];
  createdAt: Date;
}
