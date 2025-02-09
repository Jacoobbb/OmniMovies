
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./common/components/Header";

if (Platform.OS === "android") {
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor("transparent");
}
StatusBar.setBarStyle("light-content");

export default function App() {


  const leftElement = (<Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>Film List</Text>);
  // const rightElement = (<Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>Film List</Text>)

  return (
      <SafeAreaProvider>
        <SafeAreaView 
          style={styles.root} 

        >
                <Header leftElement={leftElement} />
        </SafeAreaView>
      </SafeAreaProvider>


  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1, backgroundColor: '#000000'
  }
});