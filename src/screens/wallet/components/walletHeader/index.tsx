import { Image, Text, View } from "react-native";
import WalletImage from "assets/wallet.png";
import styles from "styles";
import style from "./style";

export default () => (
  <View style={style.headerContainer}>
    <Image source={WalletImage} style={style.walletImage} />
    <Text style={[{ paddingLeft: 10 }, styles.text.bigTitle]}>My Wallet</Text>
  </View>
);
