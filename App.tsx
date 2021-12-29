import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { View } from "react-native";
import {
  Lato_100Thin as Thin,
  Lato_300Light as Light,
  Lato_400Regular as Regular,
  Lato_700Bold as Bold,
  Lato_900Black as Black,
} from "@expo-google-fonts/lato";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./src/styles";
import AppContent from "./src/app/App";
import { store, persistor } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Text } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    Thin,
    Light,
    Regular,
    Bold,
    Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container.mainApp}>
        <SafeAreaView style={{ flex: 1 }}>
          <Provider store={store}>
            <PersistGate
              loading={<Text>Loading...</Text>}
              persistor={persistor}
            >
              <AppContent />
            </PersistGate>
          </Provider>
        </SafeAreaView>
        <StatusBar style="light" />
      </View>
    );
  }
}
