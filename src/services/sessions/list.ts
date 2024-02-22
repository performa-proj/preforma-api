import { resolveDatabase, COLS_NAME } from "../../data";

type argsType = {
  [key: string]: any;
};

export const list = async (args: argsType) => {
  const db = await resolveDatabase();
  const result = await db.collection(COLS_NAME.SESSIONS).find(args).toArray();

  return result;
};
