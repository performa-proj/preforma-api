import { SessionDataType } from "./SessionDataType";
import { resolveDatabase, COLS_NAME } from "../../data";

type ArgsType = {
  code: string;
  date: string;
};

export const getByCode = async (args: ArgsType) => {
  try {
    const db = await resolveDatabase();

    const data: { code: string; date: Date; } = {
      code: args.code,
      date: new Date(args.date),
    };

    data.date.setHours(0, 0, 0, 0);

    const result = await db.collection<SessionDataType>(COLS_NAME.SESSIONS).findOne({
      code: data.code,
      start: { $gte: data.date },
    });

    return result;
  } catch (error) {
    return null;
  }
};
