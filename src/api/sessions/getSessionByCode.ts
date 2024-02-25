import Router from "koa-router";
import { Sessions } from "../../services/sessions";

export const getSessionByCode = (router: Router) => {
  router.get("/sessions/code", async (ctx, next) => {
    const data: any = ctx.request.body;

    const result = await Sessions.getByCode({
      code: data.code,
      date: data.date,
    });

    ctx.body = result;

    next();
  });
};
