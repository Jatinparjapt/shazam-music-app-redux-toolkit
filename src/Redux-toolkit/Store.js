import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootReducer"; // Import the combined reducer from your rootReducer file

const store = configureStore({
    reducer: rootReducer // Set the rootReducer as the reducer for the Redux store
});

export default store; // Export the configured store
