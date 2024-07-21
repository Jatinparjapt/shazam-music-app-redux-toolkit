import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios"
export const allSongsFetch = createAsyncThunk("allsongs", async ()=>{
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
          return response.data.tracks
      } catch (error) {
          console.error(error);
      }


})
export const getSongById = createAsyncThunk("getSong", async (id)=>{
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/tracks/',
        params: {
          ids: id
        },
        headers: {
          'x-rapidapi-key': '89408d746emsh8b8da6d3c6323e3p1f4addjsn7ec08c5a56c7',
          'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          return response.data
      } catch (error) {
          console.error(error);
      }
} )
const initialState = {
    songs : null,
    songById : null,
    isLoading : false
}
const allSongsSlice = createSlice({
    name:"allSongsSlice",
    initialState,
   extraReducers : (builder)=>{
    builder.addCase(allSongsFetch.fulfilled ,(state, action)=>{
        state.songs = action.payload
    }).addCase(allSongsFetch.pending , (state)=>{
        state.isLoading = true
    }).addCase(allSongsFetch.rejected , (state)=>{
        state.isLoading = false
    }).addCase(getSongById.fulfilled , (state, action)=>{
        state.songById = action.payload
    }).addCase(getSongById.pending , (state)=>{
        state.isLoading = true
    }).addCase(getSongById.rejected , (state)=>{
        state.isLoading = false
    })
   }
})
export default allSongsSlice.reducer