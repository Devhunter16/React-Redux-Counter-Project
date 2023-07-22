import { createSlice } from '@reduxjs/toolkit';

// Defining our starting authentication state
const initialAuthState = {
    isAuthenticated: false,
};

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            console.log("Logged in!");
            state.isAuthenticated = true;
        },
        logout(state) {
            console.log("Logged out!");
            state.isAuthenticated = false;
        }
    }
});

export const authenticationActions = authenticationSlice.actions;

export default authenticationSlice;