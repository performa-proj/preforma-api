import Router from "koa-router";
import { Orders } from "../../services/orders";

export const createNewOrder = (router: Router) => {
  router.post("/orders", async (ctx, next) => {
    const data: any = ctx.request.body;

    const result = await Orders.createNew(data);

    ctx.body = result;

    next();
  });
};
