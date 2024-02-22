import Router from "koa-router";
import { Orders } from "../../services/orders";

export const listOrders = (router: Router) => {
  router.put("/orders/list", async (ctx, next) => {
    const data: any = ctx.request.body;

    const result = await Orders.list(data);

    ctx.body = result;

    next();
  });
};
