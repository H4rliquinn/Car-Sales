export const BUY_ITEM = "BUY_ITEM";

export const buyItemAC = item => {
  //   console.log("Buy", item);
  return { type: BUY_ITEM, payload: item };
};
