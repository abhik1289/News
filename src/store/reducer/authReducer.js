import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';


let display = Cookies.get('googleAuth') ? JSON.parse(Cookies.get('googleAuth')) : null;

const initialState = {
    googleAuth: null,
    facebookAuth: null,
    auth: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        googleLogin: (state, action) => {
            state.data = action.payload;
        },
        auth: (state, action) => {
            state.auth = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { googleLogin, auth } = authSlice.actions

export default authSlice.reducer