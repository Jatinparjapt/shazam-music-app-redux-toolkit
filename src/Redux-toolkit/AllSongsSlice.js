import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

// Thunk for fetching all songs with recommendations
export const allSongsFetch = createAsyncThunk("allsongs", async () => {
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/recommendations',
        params: {
            limit: '20',
            seed_tracks: '0c6xIDDpzE81m2q797ordA',
            seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
            seed_genres: 'bollywood,indian-pop'
        },
        headers: {
            'x-rapidapi-key': 'cd99563170msh36ece9666379143p1a79fejsn3a37bb269b68',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data.tracks);
        return response.data.tracks; // Return the fetched tracks
    } catch (error) {
        console.error(error); // Log any errors
    }
})

// Thunk for fetching a song by its ID
export const getSongById = createAsyncThunk("getSong", async (id) => {
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/tracks/',
        params: {
            ids: id
        },
        headers: {
            'x-rapidapi-key': 'cd99563170msh36ece9666379143p1a79fejsn3a37bb269b68',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data; // Return the fetched song data
    } catch (error) {
        console.error(error); // Log any errors
    }
})

const initialState = {
    songs: null, // Store for all songs
    songById: null, // Store for a single song by ID
    isLoading: false // Loading state
}

// Slice for managing songs state
const allSongsSlice = createSlice({
    name: "allSongsSlice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(allSongsFetch.fulfilled, (state, action) => {
            state.songs = action.payload; // Update songs state with fetched data
        }).addCase(allSongsFetch.pending, (state) => {
            state.isLoading = true; // Set loading state to true
        }).addCase(allSongsFetch.rejected, (state) => {
            state.isLoading = false; // Set loading state to false
        }).addCase(getSongById.fulfilled, (state, action) => {
            state.songById = action.payload; // Update songById state with fetched data
        }).addCase(getSongById.pending, (state) => {
            state.isLoading = true; // Set loading state to true
        }).addCase(getSongById.rejected, (state) => {
            state.isLoading = false; // Set loading state to false
        })
    }
})

export default allSongsSlice.reducer; // Export the reducer for the slice
