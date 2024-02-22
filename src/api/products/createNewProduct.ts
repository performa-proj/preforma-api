import Router from "koa-router";
import { Products } from "../../services/products";

export const createNewProduct = (router: Router) => {
  router.post("/products", async (ctx, next) => {
    const data: any = ctx.request.body;
    const { sku, title, weight, price } = data;

    const result = await Products.createNew({
      sku,
      title,
      weight,
      price,
    });

    ctx.body = result;

    next();
  });
};
