import { Text, View } from "react-native";
import style from "./style";

type Props = { label: string; value: string };
export default ({ label, value }: Props) => {
  return (
    <View style={style.basicStatContainer}>
      <Text style={style.label}>{label}</Text>
      <Text style={style.value}>{value}</Text>
    </View>
  );
};
