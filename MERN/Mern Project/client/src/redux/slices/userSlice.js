import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            localStorage.setItem('user', JSON.stringify(action.payload));
            localStorage.setItem('isLoggedIn', 'true');
        },
        clearUser: (state) => {
            state.user = null;
            state.isLoggedIn = false;
            localStorage.removeItem('user');
            localStorage.removeItem('isLoggedIn');
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export default userSlice.reducer;
