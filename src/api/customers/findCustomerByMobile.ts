import Router from "koa-router";
import { Customers } from "../../services/customers";

export const findCustomerByMobile = (router: Router) => {
  router.put("/customers/mobile", async (ctx, next) => {
    const data: any = ctx.request.body;

    const result = await Customers.findExactByMobile(data)

    ctx.body = result;

    next();
  });
};
