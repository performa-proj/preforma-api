import { resolveDatabase, COLS_NAME } from "../../data";

type argsType = {
  initialCash: number;
};

export const createNew = async (args: argsType) => {
  const { initialCash } = args;
  const now = new Date();

  const [h, m, s] = now.toLocaleTimeString("en", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }).split(":");
  const code = `${h}${m}${s}`;

  const data: any = {
    code,
    initialCash,
    status: "OPENED",
    start: now,
    createdAt: now,
    updatedAt: now,
  };

  const db = await resolveDatabase();
  const result = await db.collection(COLS_NAME.SESSIONS).insertOne(data);

  if (result.insertedId) {
    data._id = result.insertedId;

    return {
      _id: result.insertedId,
      ...data,
    };
  }

  return null;
};
