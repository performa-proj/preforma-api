import Router from "koa-router";
import { Sessions } from "../../services/sessions";

export const createNewSession = (router: Router) => {
  router.post("/sessions", async (ctx, next) => {
    const data: any = ctx.request.body;

    const result = await Sessions.createNew(data);

    ctx.body = result;

    next();
  });
};
