import { resolveDatabase, COLS_NAME } from "../../../data";

type ArgsType = {
  title: string;
  structures: {
    weight: number;
    packing: number;
    levels: number[];
  }[];
};

export const createNew = async (args: ArgsType) => {
  const { title, structures } = args;
  const now = new Date();
  const data: any = {
    title,
    structures,
    createdAt: now,
    updatedAt: now,
  };

  const db = await resolveDatabase();
  const result = await db.collection(COLS_NAME.PRICE_STRUCTURE).insertOne(data);

  if (result.insertedId) {
    data._id = result.insertedId;

    return data;
  }

  return null;
};
