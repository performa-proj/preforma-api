import Router from "koa-router";
import { Sessions } from "../../services/sessions";

export const completeSession = (router: Router) => {
  router.put("/sessions/complete", async (ctx, next) => {
    const data: any = ctx.request.body;

    const result = await Sessions.complete(data);

    ctx.body = result;

    next();
  });
};
