import { resolveDatabase, COLS_NAME } from "../../data";

type ArgsType = {
  mobile: string;
};

export const findExactByMobile = async (args: ArgsType) => {
  const db = await resolveDatabase();
  const data = await db.collection(COLS_NAME.CUSTOMERS).findOne({
    mobile: args.mobile,
  });

  return data;
};
