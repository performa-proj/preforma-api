import Router from "koa-router";

import { completeSession } from "./completeSession";
import { createNewSession } from "./createNewSession";
import { getSessionByID } from "./getSessionByID";
import { listSessions } from "./listSessions";

export const mapSessions = (router: Router) => {
  completeSession(router);
  createNewSession(router);
  getSessionByID(router);
  listSessions(router);
};
