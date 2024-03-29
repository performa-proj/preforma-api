import Router from "koa-router";
import { Sessions } from "../../services/sessions";

export const getSessionByID = (router: Router) => {
  router.get("/sessions/id", async (ctx, next) => {
    const data: any = ctx.request.body;

    const result = await Sessions.getByID({
      id: data.id,
    });

    ctx.body = result;

    next();
  });
};
