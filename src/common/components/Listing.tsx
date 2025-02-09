import { FlatList, StyleSheet, View } from "react-native";
import { Movie } from "../../typings/movie";
import MovieCard from "./MovieCard";

export enum LISTING_MODE {
    NORMAL = 2,
    FAVORITE = 1
}

interface ListingProps {
    data: Movie[];
    mode: LISTING_MODE
}

export default function Listing(props: ListingProps) {

    const { data, mode } = props;

    const renderItem = ({ item }: { item: Movie }) => {
        const isFavorite = mode === LISTING_MODE.FAVORITE;
        return <MovieCard Title={item.Title} imdbID={item.imdbID}  Poster={item.Poster} isFavorite={isFavorite} />
    };
    
      const keyExtractor = (item: Movie) => {
        return item.imdbID;
      };

    return (
        <View style={styles.container}>
            <FlatList
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