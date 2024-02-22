import { resolveDatabase, COLS_NAME } from "../../data";

type ArgsType = {
  sku: string;
  title: string;
  weight: number;
  price: number;
};

export const createNew = async (args: ArgsType) => {
  const { sku, title, weight, price } = args;
  const data: any = {
    sku,
    title,
    weight,
    price,
    levels: [null, null, null, null, null],
    createdAt: new Date(),
  };

  const db = await resolveDatabase();
  const result = await db.collection(COLS_NAME.PRODUCTS).insertOne(data);

  if (result.insertedId) {
    data._id = result.insertedId;

    return data;
  }

  return null;
};
