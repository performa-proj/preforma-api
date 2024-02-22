import Koa from "koa";
import Router from "koa-router";
import { mapCustomers } from "./customers";
import { mapOrders } from "./orders";
import { mapProducts } from "./products";
import { mapSessions } from "./sessions";

let _ROUTER: Router | undefined = undefined;

const resolveRouter = () => {
  if (_ROUTER === undefined) {
    _ROUTER = new Router();
    _ROUTER.get("/about", (ctx, next) => {
      ctx.body = {
        time: Date(),
      };
    });

    mapCustomers(_ROUTER);
    mapOrders(_ROUTER);
    mapProducts(_ROUTER);
    mapSessions(_ROUTER);
  }

  return _ROUTER;
};

export const mapRouter = (server: Koa) => {
  const router = resolveRouter();

  server
    .use(router.routes())
    .use(router.allowedMethods());
};
