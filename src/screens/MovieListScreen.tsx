import { StyleSheet, Text, View } from "react-native";
import * as Icons from "react-native-heroicons/outline"
import Header from "../common/components/Header";
import MovieCard from "../common/components/MovieCard";
import Listing, { LISTING_MODE } from "../common/components/Listing";
import { DATA } from "../common/constants/mock";

export default function MovieListScreen() {

    const leftElement = (<Text style={styles.leftElement}>OmniMovies</Text>);
    const rightElement = (<Icons.MagnifyingGlassIcon color={styles.rightElement.color} />);

    return (
        <>
            <Header leftElement={leftElement} rightElement={rightElement} hasGradient={true} />
            <Listing data={DATA} mode={LISTING_MODE.NORMAL} />
        </>
    )
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