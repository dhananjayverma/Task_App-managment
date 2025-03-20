import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import ToastManager from "toastify-react-native";

import AppNavigator from "../navigation";
import { store } from "../redux/store";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
      <ToastManager />
      <StatusBar style="inverted" />
    </Provider>
  );
}
