import { createSlice } from '@reduxjs/toolkit';

// Initial state setup for the playlist
const initialState = {
  playList: JSON.parse(localStorage.getItem('playlist')) || [], // Initialize playlist from localStorage or default to an empty array
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    // Reducer to add a new song to the playlist
    setSongToPlayList: (state, action) => {
      const newSong = action.payload; // Extract new song from action payload
      state.playList.push(newSong); // Add the new song to the playlist in Redux state
      localStorage.setItem('playlist', JSON.stringify(state.playList)); // Update localStorage with the new playlist
    },
    // Other reducers can be added here
  },
});

// Exporting the action to add songs to the playlist
export const { setSongToPlayList } = playlistSlice.actions;

// Exporting the reducer to be used in the store
export default playlistSlice.reducer;
