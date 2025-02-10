
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TabNavigator from "./src/navigation/TabNavigator";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/store/store";

if (Platform.OS === "android") {
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor("transparent");
}
StatusBar.setBarStyle("light-content");

export default function App() {

  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <SafeAreaView 
            style={styles.root} 
            edges={['left', 'right', 'bottom']}
          >
            <TabNavigator />
          </SafeAreaView>
        </SafeAreaProvider>
        </PersistGate>
      </Provider>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1, backgroundColor: '#000000'
  }
});