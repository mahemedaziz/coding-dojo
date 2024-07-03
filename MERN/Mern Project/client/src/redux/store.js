// store.js
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import userReducer from './slices/userSlice';
import carReducer from './slices/carSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        user: userReducer,
        car: carReducer
    },
});
