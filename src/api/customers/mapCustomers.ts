import Router from "koa-router";

import { createNewCustomer } from "./createNewCustomer";
import { findCustomerByMobile } from "./findCustomerByMobile";

export const mapCustomers = (router: Router) => {
  createNewCustomer(router);
  findCustomerByMobile(router);
};
