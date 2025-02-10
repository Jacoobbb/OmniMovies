import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { watchFetchMovieDetails, watchFetchMovies } from './movies/saga';
import { favoriteMoviesReducer, movieDetailsReducer, movieReducer } from './movies/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
};

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = {
  movies: movieReducer,
  movieDetails: movieDetailsReducer,
  favorites: persistReducer(persistConfig, favoriteMoviesReducer),
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchMovies);
sagaMiddleware.run(watchFetchMovieDetails);

export const persistor = persistStore(store);
