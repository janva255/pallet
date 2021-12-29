import { Text, View } from "react-native";
import { ICoin } from "store/models/coin";
import style from "./style";

type Props = {
  coin: ICoin;
};

export default ({ coin }: Props) => {
  return (
    <View style={style.coinContainer}>
      <View style={style.coinNameContainer}>
        <Text style={style.coinNameText}>{coin.name}</Text>
      </View>

      <View style={style.coinInvestedContainer}>
        <Text style={style.coinValueText}>
          {`$${coin.invested.toLocaleString()}`}
        </Text>
      </View>
    </View>
  );
};
