import Router from "koa-router";
import { Products } from "../../../services/products";

export const resolvePrice = (router: Router) => {
  router.put("/products/price", async (ctx, next) => {
    const data: any = ctx.request.body;

    ctx.body = await Products.PriceStructure.resolvePrice(data);

    next();
  });
};
