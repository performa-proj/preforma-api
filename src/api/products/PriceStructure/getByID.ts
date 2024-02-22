import Router from "koa-router";
import { Products } from "../../../services/products";

export const getByID = (router: Router) => {
  router.put("/products/price/structure", async (ctx, next) => {
    const data: any = ctx.request.body;

    const result = await Products.PriceStructure.getByID({
      id: data.id
    });

    ctx.body = result;

    next();
  });
};
