
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Icons from "react-native-heroicons/outline";
import Header from "./src/common/components/Header";
import AppNavigator from "./src/navigation/AppNavigator";

if (Platform.OS === "android") {
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor("transparent");
}
StatusBar.setBarStyle("light-content");

export default function App() {


  const leftElement = (<Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>Film List</Text>);
  const rightElement = (
    <View>
      <Icons.MagnifyingGlassIcon color={'#fff'} />
      <Header leftElement={leftElement} rightElement={undefined} />
    </View>
  )

  return (
      <SafeAreaProvider>
        <SafeAreaView 
          style={styles.root} 
        >
          <AppNavigator />
        </SafeAreaView>
      </SafeAreaProvider>


  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1, backgroundColor: '#000000'
  }
});