import { financeActionTypes } from "../../actions/actionTypes";
import { CoinNames, FinanceActions, FinanceState } from "../../types";

const initialState: FinanceState = {
  cash: 132340,
  coins: [
    { id: 1, invested: 10340, name: CoinNames.Pala },
    { id: 2, invested: 54154, name: CoinNames.Golo },
    { id: 3, invested: 4154, name: CoinNames.Roik },
  ],
};

export default (state = initialState, action: FinanceActions) => {
  switch (action.type) {
    case financeActionTypes.INVEST_MONEY: {
      const cashSum = state.coins.length * 1000;
      if (state.cash > cashSum) {
        return {
          ...state,
          cash: state.cash - cashSum,
          coins: state.coins.map((coin) => ({
            ...coin,
            invested: coin.invested + 1000,
          })),
        };
      }
      return state;
    }
    default:
      return state;
  }
};
