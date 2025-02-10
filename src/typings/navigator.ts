import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MovieDetailsScreenOwnProps } from "../screens/MovieDetailsScreen";

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: NativeStackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Main: TabStackParamList;
  MovieDetails: MovieDetailsScreenOwnProps;
  MovieSearch: undefined;
  FavoriteMovies: undefined;
};

export type TabStackParamList = {
    MovieList: { search: string };
    Favorites: undefined;
};

export interface TabIconProps {
    color: string; 
    size: number; 
    focused: boolean;
}