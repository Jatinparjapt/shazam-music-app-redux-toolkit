import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

// Thunk for fetching a list of artists
export const getArtists = createAsyncThunk("artists", async () => {
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/artists/',
        params: {
            ids: '2w9zwq3AktTeYYMuhMjju8,4NHQUGzhtTLFvgF5SZesLK,1Xyo4u8uXC1ZmMpatF05PJ,4YRxDV8wJFPHPTeXepOstw,3TVXtAsR1Inumwj472S9r4,6eUKZXaKkcviH0Ku9w2n3V,5K4W6rqBFWDnAN6FQUkS6x,66CXWjxzNUsdJxJ2JdwvnR,3nFkdlSjzX9mRTtwJOzDYB,5pKCCKE2ajJHZ9KAiaK11H,1uNFoZAHBGtllmzznpCI3s,0hCNtLu0JehylgoiP8L4Gh,3MZsBdqDrRTJihTHQrO6Dq,1dfeR4HaWDbWqFHLkxsg1d,7dGJo4pcD2V6oG8kP0tJRR,3Nrfpe0tUJi4K4DXYWgMUX,5WUlDfRSoLAfcVSX1WnrxN,0du5cEVh5yTK9QJze8zA0C,53XhwfbYqKCa1cC15pYq2q,6S2OmqARrzebs0tKUEyXyp'
        },
        headers: {
            'x-rapidapi-key': 'cd99563170msh36ece9666379143p1a79fejsn3a37bb269b68',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data; // Return the fetched artists data
    } catch (error) {
        console.error(error); // Log any errors
    }
})

// Thunk for fetching an artist by their ID
export const getArtistById = createAsyncThunk("artistById", async (id) => {
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/artist_overview/',
        params: {
            id: id
        },
        headers: {
            'x-rapidapi-key': 'cd99563170msh36ece9666379143p1a79fejsn3a37bb269b68',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data; // Return the fetched artist data
    } catch (error) {
        console.error(error); // Log any errors
    }
})

const initialState = {
    artists: null, // Store for the list of artists
    artistById: null, // Store for a single artist by ID
    isLoading: false // Loading state
}

// Slice for managing artists state
const artistsSlice = createSlice({
    name: "artistsSlice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getArtists.fulfilled, (state, action) => {
            state.artists = action.payload; // Update artists state with fetched data
        }).addCase(getArtists.pending, (state) => {
            state.isLoading = true; // Set loading state to true
        }).addCase(getArtists.rejected, (state) => {
            state.isLoading = false; // Set loading state to false
        }).addCase(getArtistById.fulfilled, (state, action) => {
            state.artistById = action.payload; // Update artistById state with fetched data
        }).addCase(getArtistById.pending, (state) => {
            state.isLoading = true; // Set loading state to true
        }).addCase(getArtistById.rejected, (state) => {
            state.isLoading = false; // Set loading state to false
        })
    }
})

export default artistsSlice.reducer; // Export the reducer for the slice
