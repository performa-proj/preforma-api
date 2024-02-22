import { resolveDatabase, COLS_NAME } from "../../data";

type argsType = {
  initialCash: number;
};

export const createNew = async (args: argsType) => {
  const { initialCash } = args;
  const now = new Date();
  const data: any = {
    initialCash,
    transactions: 0,
    status: "OPENED",
    createdAt: now,
  };

  const db = await resolveDatabase();
  const result = await db.collection(COLS_NAME.SESSIONS).insertOne(data);

  if (result.insertedId) {
    data._id = result.insertedId;

    return data;
  }

  return null;
};
