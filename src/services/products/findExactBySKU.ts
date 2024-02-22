import { resolveDatabase, COLS_NAME } from "../../data";

type ArgsType = {
  sku: string;
};

export const findExactBySKU = async (args: ArgsType) => {
  const db = await resolveDatabase();
  const result = await db.collection(COLS_NAME.PRODUCTS).findOne({
    sku: args.sku,
  });

  return result;
};
