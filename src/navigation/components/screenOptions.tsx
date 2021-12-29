import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Screens } from "navigation/AppNavigation";
import { Ionicons } from "@expo/vector-icons";

const screenOptions = ({
  route,
}: {
  route: { name: string };
}): BottomTabNavigationOptions => ({
  headerTitle: "",
  headerStyle: { backgroundColor: "transparent" },
  headerTintColor: "#fff",

  tabBarActiveTintColor: "#1b04e6",

  tabBarLabelStyle: { fontSize: 14, fontFamily: "Bold" },

  tabBarIcon: ({ color, size }) => {
    const icons: Record<
      Screens,
      React.ComponentProps<typeof Ionicons>["name"]
    > = {
      Wallet: "wallet",
      Scan: "scan",
      Profile: "person",
    };

    return (
      <Ionicons name={icons[route.name as Screens]} color={color} size={size} />
    );
  },
});

export default screenOptions;
