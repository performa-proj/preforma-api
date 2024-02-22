export interface IPriceStructure {
  _id: string;
  title: string;
  structures: {
    weight: number;
    packing: number;
    levels: number[];
  }[];
}
