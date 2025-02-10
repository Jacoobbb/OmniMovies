# Omni Movie App

A React Native movie app that lets users browse movies, view detailed information about each movie, and add/remove them to/from their favorites. It uses Redux for state management and integrates with a third-party movie API to fetch movie data.

## Features

- Browse and search movies
- View detailed information about each movie (poster, ratings, synopsis, etc.)
- Add movies to the favorites list
- Remove movies from the favorites list
- Manage movie details and favorite status seamlessly

## Tech Stack

- **React Native**: Cross-platform mobile app development
- **Redux**: State management
- **React Navigation**: Navigation between screens
- **Reanimated**: Smooth animations for scroll interactions
- **React-Redux**: To connect the app's state with React components
- **Axios**: For API requests (optional, depending on your API implementation)
- **TypeScript**: For type safety

## Project Setup

### Prerequisites

- Node.js (18.18.2)
- yarn
- React Native CLI (for Android/iOS development)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-app.git
   cd movie-app
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the project:

   ```bash
   yarn run android  # for Android
   yarn run ios      # for iOS (macOS only)
   ```

4. Make sure to rename `env-example` to `.env`.

## Features & Screens

### 1. **Home Screen (Movie List)**
- Display a list of movies that users can browse through.
- Users can search for movies by title.
- Navigation to movie details when a movie is clicked.

### 2. **Movie Details Screen**
- Show detailed information about the selected movie, including:
  - Movie title
  - Poster
  - IMDB ratings
  - Movie synopsis
  - Credits (Cast & Crew)
- Users can add or remove the movie from their favorites.

### 3. **Favorites Screen**
- A list of movies that users have marked as favorites.
- Users can navigate to the details of the movie from the favorites list.

### 4. **Search Functionality**
- TODO

## Navigation

The app uses `React Navigation` for navigation and tab-based routing:

- **Movie List Screen**: Shows a list of movies and includes a search bar.
- **Favorites Screen**: Displays movies that are marked as favorites.
- **Movie Details Screen**: Shows details about a selected movie.

### Bottom Tab Navigation

- **Movies Tab**: Displays a list of movies.
- **Favorites Tab**: Displays the list of favorited movies.

## State Management

The app uses **Redux** for managing the state of:
- Movies (fetched from an external API or a static mock source)
- Favorite movies
- Loading and error states

### Actions

- `fetchMoviesRequest`: Fetch a list of movies based on a search query.
- `fetchMovieDetailsRequest`: Fetch detailed information about a specific movie.
- `addFavoriteMovie`: Add a movie to the favorites list.
- `removeFavoriteMovie`: Remove a movie from the favorites list.

### Reducers

- **Movies Reducer**: Handles movie data, loading state, and selected movie details.
- **Favorites Reducer**: Manages the state of the user's favorite movies.


## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request.

### Steps for Contributing:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make the necessary changes and test them.
4. Commit your changes with a meaningful commit message.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **React Native**: For the mobile app development framework.
- **Redux**: For state management.
- **React Navigation**: For easy navigation within the app.
- **React-Redux**: For connecting Redux with React components.