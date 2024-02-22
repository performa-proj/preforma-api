import Router from "koa-router";
import { Products } from "../../../services/products";

export const createNewPriceStructure = (router: Router) => {
  router.post("/products/price/structure", async (ctx, next) => {
    const data: any = ctx.request.body;

    const result = await Products.PriceStructure.createNew(data);

    ctx.body = result;

    next();
  });
};
