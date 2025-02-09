import { StyleSheet, Text, View } from "react-native";
import * as Icons from "react-native-heroicons/outline"
import Header from "../common/components/Header";

export default function MovieListScreen() {

    const leftElement = (<Text style={styles.leftElement}>Film List</Text>);
    const rightElement = (<Icons.MagnifyingGlassIcon color={styles.rightElement.color} />);

    return <Header leftElement={leftElement} rightElement={rightElement} />
}

const styles = StyleSheet.create({
    leftElement: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#ffffff'
    },
    rightElement: {
        color: '#ffffff'
    }
})