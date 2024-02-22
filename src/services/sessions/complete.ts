import { resolveDatabase, COLS_NAME } from "../../data";
import { IOrder } from "../orders/IOrder";

type argsType = {
  sessionID: string;
  cashCount: number;
  [key: string]: any;
};

type SessionSummary = {
  transactions: number;
  total: number;
  cash: number;
  transfer: number;
  creditline: number;
  products: {
    [id: string]: {
      id: string;
      sku: string;
      title: string;
      quantity: number;
    };
  };
}

export const complete = async (args: argsType) => {
  const db = await resolveDatabase();
  const { sessionID } = args;
  const orders: any[] = await db.collection(COLS_NAME.ORDERS).find({ sessionID }).toArray();

  const summary: any = {
    transactions: orders.length,
    total: 0,
    cash: 0,
    transfer: 0,
    creditline: 0,
    products: {},
  };

  for (let order of orders) {
    summary.total += order.total;
    summary.cash += order.payment.cash;
    summary.transfer += order.payment.transfer;
    summary.creditline += order.payment.creditline;

    for (let orderline of order.orderlines) {
      const { id, sku, title, quantity } = orderline;

      if (!summary.products[id]) {
        summary.products[id] = {
          id,
          sku,
          title,
          quantity: 0,
        };
      }

      summary.products[id].quantity += quantity;
    }
  }

  // const result = await db.collection(COLS_NAME.SESSIONS).find(args).toArray();

  return summary;
};
