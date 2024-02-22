import Router from "koa-router";
import { Sessions } from "../../services/sessions";

export const listSessions = (router: Router) => {
  router.put("/sessions/list", async (ctx, next) => {
    const data: any = ctx.request.body;

    const result = await Sessions.list(data);

    ctx.body = result;

    next();
  });
};
