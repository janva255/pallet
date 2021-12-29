import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/reducers/rootReducer";
import { useMemo } from "react";
import WalletHeader from "./components/walletHeader";
import Coins from "./components/walletCoins";
import StatBar from "./components/statBar";
import { Button } from "components";
import { View } from "react-native";
import { investMoneyAction } from "store/actions/finance/financeActions";

export default () => {
  const dispatch = useDispatch();
  const { cash, coins } = useSelector((state: RootState) => state.finance);

  const investedAmount = useMemo(
    () => coins.reduce((curValue, coin) => curValue + coin.invested, 0),
    [coins]
  );

  const investMoney = () => dispatch(investMoneyAction());

  return (
    <>
      <WalletHeader />

      <StatBar label="CASH" value={`$${cash.toLocaleString()}`} />
      <StatBar label="INVESTED" value={`$${investedAmount.toLocaleString()}`} />

      <View style={{ marginTop: 20 }}>
        <Button label="INVEST" onPress={investMoney} />
      </View>

      <Coins coins={coins} />
    </>
  );
};
