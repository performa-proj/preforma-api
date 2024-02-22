export type CostStructureDetail = {
  weight: number;
  packing: number;
  plm1: number;
  plm2: number;
  plm3: number;
  plm4: number;
  plm5: number;
};

export type CostStructure = {
  c01: CostStructureDetail;
  c05: CostStructureDetail;
  c08: CostStructureDetail;
  c10: CostStructureDetail;
  c15: CostStructureDetail;
  c20: CostStructureDetail;
  c25: CostStructureDetail;
  c45: CostStructureDetail;
};
