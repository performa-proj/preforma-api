import Router from "koa-router";
import { Products } from "../../../services/products";

export const getAllPriceStructures = (router: Router) => {
  router.get("/products/price/structure", async (ctx, next) => {
    const result = await Products.PriceStructure.getAll();

    ctx.body = result;

    next();
  });
};
