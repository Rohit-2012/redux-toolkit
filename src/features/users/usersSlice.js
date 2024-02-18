import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0', name: 'Serious Black'},
    {id:'1', name: 'Arthur Weesley'},
    {id:'2', name: 'Alastor Moody'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducer: {}
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer