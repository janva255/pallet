import { Text, View } from "react-native";
import { ICoin } from "store/models/coin";
import Coin from "./components/coin";
import styles from "styles";

type Props = {
  coins: ICoin[];
};

export default ({ coins }: Props) => (
  <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
    <Text style={styles.text.subtitle}>MY COINS</Text>
    {coins.map((coin) => (
      <Coin key={coin.id} coin={coin} />
    ))}
  </View>
);
