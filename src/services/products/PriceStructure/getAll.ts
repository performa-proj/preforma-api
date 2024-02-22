import { resolveDatabase, COLS_NAME } from "../../../data";

export const getAll = async () => {
  const db = await resolveDatabase();

  const result = await db.collection(COLS_NAME.PRICE_STRUCTURE).find().toArray();

  console.log(1, result);

  return result;
};
