import { combineReducers } from "@reduxjs/toolkit";
import AllSongsSlice from "./AllSongsSlice";
import artistsSlice from "./Artists";
import loginSlice from "./Login";
import searchSlice from "./Search";
import playlistSlice from "./Playlist"; // Updated import name to match the exported slice

// Combine all individual reducers into a single rootReducer
const rootReducer = combineReducers({
    allSongs: AllSongsSlice, // Reducer for managing songs data
    artists: artistsSlice,   // Reducer for managing artists data
    login: loginSlice,       // Reducer for handling user login and signup data
    search: searchSlice,     // Reducer for managing search functionality
    playlist: playlistSlice // Reducer for managing the playlist
});

export default rootReducer;
