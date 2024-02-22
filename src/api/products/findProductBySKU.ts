import Router from "koa-router";
import { Products } from "../../services/products";

export const findProductBySKU = (router: Router) => {
  router.put("/products/sku", async (ctx, next) => {
    const data: any = ctx.request.body;

    const result = await Products.findExactBySKU(data)

    ctx.body = result;

    next();
  });
};
