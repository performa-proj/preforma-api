export type PriceStructureDetail = {
  weight: number;
  pl1: number;
  pl2: number;
  pl3: number;
  pl4: number;
  pl5: number;
};

export type PriceStructure = {
  p01: PriceStructureDetail;
  p05: PriceStructureDetail;
  p08: PriceStructureDetail;
  p10: PriceStructureDetail;
  p15: PriceStructureDetail;
  p20: PriceStructureDetail;
  p25: PriceStructureDetail;
  p45: PriceStructureDetail;
}
