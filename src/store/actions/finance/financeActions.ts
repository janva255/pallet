import { InvestMoneyAction } from "../../types";
import { financeActionTypes } from "../actionTypes";

export const investMoneyAction = (): InvestMoneyAction => ({
  type: financeActionTypes.INVEST_MONEY,
});
