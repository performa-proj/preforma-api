import { resolveDatabase, COLS_NAME } from "../../data";

type ArgsType = {
  [key: string]: any;
};

export const list = async (args: ArgsType) => {
  const db = await resolveDatabase();
  const result = await db.collection(COLS_NAME.ORDERS).find(args).toArray();

  return result;
};
