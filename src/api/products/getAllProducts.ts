import Router from "koa-router";
import { Products } from "../../services/products";

export const getAllProducts = (router: Router) => {
  router.get("/products", async (ctx, next) => {
    const result = await Products.getAll()

    ctx.body = result;

    next();
  });
};
