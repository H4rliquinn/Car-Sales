export const BUY_ITEM = "BUY_ITEM";

export const buyItemAC = item => {
  //   console.log("Buy", item);
  return { type: BUY_ITEM, payload: item };
};

export const REM_ITEM = "REM_ITEM";

export const removeItemAC = item => {
  //   console.log("Remove", item);
  return { type: REM_ITEM, payload: item };
};
