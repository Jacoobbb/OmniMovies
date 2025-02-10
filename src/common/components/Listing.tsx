import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
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
    scrollY?: SharedValue<number>;
    onEndReached: () => void;
    loading: boolean;
}

export default function Listing(props: ListingProps) {

    const { data, mode, scrollY, onEndReached, loading } = props;

    const renderItem = ({ item }: { item: Movie }) => {
        const isFavorite = mode === LISTING_MODE.FAVORITE;
        return (item.Poster !== 'N/A') ? <MovieCard Title={item.Title} imdbID={item.imdbID}  Poster={item.Poster} isFavorite={isFavorite} /> : <></>
    };
    
    const keyExtractor = (item: Movie) => {
      return item.imdbID;
    };

    const scrollHandler = scrollY && useAnimatedScrollHandler({
      onScroll: (event) => {
          scrollY.value = event.contentOffset.y;
      },
    });

    return (
        <View style={styles.container}>
            <Animated.FlatList
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                numColumns={2}
                data={data}
                onEndReached={onEndReached}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading ? <ActivityIndicator size="small" color="#000" /> : null}
        
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