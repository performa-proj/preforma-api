import { resolveDatabase, COLS_NAME } from "../../../data";
import { getByID } from "./getByID";

type ArgsType = {
  weight: number;
  price: number;
  priceStructID?: string;
  levels: (number | null)[];
};

export const resolvePrice = async (args: ArgsType): Promise<{
  base: number;
  levels: number[];
}> => {
  const { price } = args;

  return {
    base: price,
    levels: [price, price, price, price, price],
  };
};
