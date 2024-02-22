import { ObjectId } from "mongodb";
import { resolveDatabase, COLS_NAME } from "../../../data";
import { IPriceStructure } from "./IPriceStructure";

type ArgsType = {
  id: string;
};

export const getByID = async (args: ArgsType): Promise<IPriceStructure | null> => {
  const db = await resolveDatabase();

  const data: any = {
    _id: new ObjectId(args.id),
  };

  const result: any = await db.collection(COLS_NAME.PRICE_STRUCTURE).findOne(data);

  return result;
};
