import { resolveDatabase, COLS_NAME } from "../../data";

type ArgsType = {
  name: string;
  mobile: string;
  level?: number;
  creditlimit?: number;
  creditdays?: number;
};

export const createNew = async (args: ArgsType) => {
  const { name, mobile, level = 4, creditlimit = 0, creditdays = 0 } = args;
  const data: any = {
    mobile,
    name,
    level,
    creditlimit,
    creditdays,
    createdAt: new Date(),
  };

  const db = await resolveDatabase();
  const result = await db.collection(COLS_NAME.CUSTOMERS).insertOne(data);

  if (result.insertedId) {
    data._id = result.insertedId;

    return data;
  }

  return null;
};
