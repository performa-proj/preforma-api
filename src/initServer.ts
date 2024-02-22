import Koa from "koa";
import bodyParser from "koa-bodyparser";

import { mapRouter } from "./api/mapRouter";

const cors = require("@koa/cors");

let _server: Koa | undefined = undefined;

export const initServer = () => {
  if (_server === undefined) {
    _server = new Koa();
    _server.use(bodyParser());
    _server.use(cors());

    mapRouter(_server);
  }

  return _server;
};
