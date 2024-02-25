import { ObjectId } from "mongodb";
import { SessionDataType } from "./SessionDataType";
import { resolveDatabase, COLS_NAME } from "../../data";

type ArgsType = {
  id: string;
};

export const getByID = async (args: ArgsType) => {
  try {
    const db = await resolveDatabase();

    const data: any = {
      _id: new ObjectId(args.id),
    };

    const result = await db.collection<SessionDataType>(COLS_NAME.SESSIONS).findOne(data);

    return result;
  } catch (error) {
    return null;
  }
};
