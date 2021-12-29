import { ICoin } from "store/models/coin";
import { financeActionTypes } from "../actions/actionTypes";

export interface FinanceState {
  cash: number;
  coins: ICoin[];
}

export type InvestMoneyAction = {
  type: typeof financeActionTypes.INVEST_MONEY;
};

export type FinanceActions = InvestMoneyAction;
