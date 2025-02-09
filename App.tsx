
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation/AppNavigator";
import TabNavigator from "./src/navigation/TabNavigator";

if (Platform.OS === "android") {
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor("transparent");
}
StatusBar.setBarStyle("light-content");

export default function App() {

  return (
      <SafeAreaProvider>
        <SafeAreaView 
          style={styles.root} 
          edges={['left', 'right', 'bottom']}
        >
          <TabNavigator />
        </SafeAreaView>
      </SafeAreaProvider>


  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1, backgroundColor: '#000000'
  }
});