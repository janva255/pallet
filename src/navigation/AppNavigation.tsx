import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScanQrScreen from "screens/scanqr/ScanQrScreen";
import WalletScreen from "screens/wallet/WalletScreen";
import ProfileScreen from "screens/profile/ProfileScreen";
import screenOptions from "./components/screenOptions";

const Tab = createBottomTabNavigator();

export enum Screens {
  Wallet = "Wallet",
  Scan = "Scan",
  Profile = "Profile",
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFF",
  },
};

export default () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator screenOptions={screenOptions} initialRouteName="Wallet">
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Scan" component={ScanQrScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
