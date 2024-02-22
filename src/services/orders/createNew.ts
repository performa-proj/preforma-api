import { resolveDatabase, COLS_NAME } from "../../data";

type ArgsType = {
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
};

export const createNew = async (args: ArgsType) => {
  const db = await resolveDatabase();
  const data: any = {
    ...args,
    createdAt: new Date(),
  };

  const result = await db.collection(COLS_NAME.ORDERS).insertOne(data);

  if (result.insertedId) {
    return {
      _id: result.insertedId,
    };
  }

  return null;
};
