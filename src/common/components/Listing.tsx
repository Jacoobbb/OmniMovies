import { FlatList, StyleSheet, View } from "react-native";
import { Movie } from "../../typings/movie";
import MovieCard from "./MovieCard";
import Animated, { SharedValue, useAnimatedScrollHandler } from "react-native-reanimated";

export enum LISTING_MODE {
    NORMAL = 2,
    FAVORITE = 1
}

interface ListingProps {
    data: Movie[];
    mode: LISTING_MODE;
    scrollY: SharedValue<number>;
}

export default function Listing(props: ListingProps) {

    const { data, mode, scrollY } = props;

    const renderItem = ({ item }: { item: Movie }) => {
        const isFavorite = mode === LISTING_MODE.FAVORITE;
        return <MovieCard Title={item.Title} imdbID={item.imdbID}  Poster={item.Poster} isFavorite={isFavorite} />
    };
    
    const keyExtractor = (item: Movie) => {
      return item.imdbID;
    };

    const scrollHandler = useAnimatedScrollHandler({
      onScroll: (event) => {
          scrollY.value = event.contentOffset.y;
      },
    });

    return (
        <View style={styles.container}>
            <Animated.FlatList
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                numColumns={mode}
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  }
});