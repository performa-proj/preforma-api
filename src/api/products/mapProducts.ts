import Router from "koa-router";

import { createNewProduct } from "./createNewProduct";
import { findProductBySKU } from "./findProductBySKU";
import { getAllProducts } from "./getAllProducts";

import { createNewPriceStructure } from "./PriceStructure/createNewPriceStructure";
import { resolvePrice } from "./PriceStructure/resolvePrice";
import { getAllPriceStructures } from "./PriceStructure/getAllPriceStructures";
import { getByID } from "./PriceStructure/getByID";

export const mapProducts = (router: Router) => {
  createNewProduct(router);
  findProductBySKU(router);
  getAllProducts(router);

  createNewPriceStructure(router);
  resolvePrice(router);
  getAllPriceStructures(router);
  getByID(router);
};
