import Router from "koa-router";

import { createNewOrder } from "./createNewOrder";
import { listOrders } from "./listOrders";

export const mapOrders = (router: Router) => {
  createNewOrder(router);
  listOrders(router);
};
