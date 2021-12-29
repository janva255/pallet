import { Image, Text, View } from "react-native";
import UserProfileImage from "assets/userimage.jpeg";
import { Ionicons } from "@expo/vector-icons";
import style from "./style";
import { useSelector } from "react-redux";
import { RootState } from "store/reducers/rootReducer";

export default () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <View style={{ alignItems: "center" }}>
      <Image source={UserProfileImage} style={style.profileImage} />
      <Text style={style.userName}>{user.name}</Text>
      <View style={style.emailContainer}>
        <Ionicons name="mail-outline" color="#0a0b21" size={30} />
        <Text style={style.emailText}>{user.email}</Text>
      </View>
    </View>
  );
};
