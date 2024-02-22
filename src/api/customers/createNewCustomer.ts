import Router from "koa-router";
import { Customers } from "../../services/customers";

export const createNewCustomer = (router: Router) => {
  router.post("/customers", async (ctx, next) => {
    const data: any = ctx.request.body;

    const result = await Customers.createNew({
      name: data.name,
      mobile: data.mobile,
      level: data.level,
      creditlimit: data.creditlimit,
      creditdays: data.creditdays,
    });

    ctx.body = result;

    next();
  });
};
