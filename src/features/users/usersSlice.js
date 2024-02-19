import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 'asdafdf1',
        name: 'Rohit Kirti',
        email: 'rohit.kirti@gmail.com'
    }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        createUser: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (user) => {
                return {
                    payload: {
                        id: nanoid(),
                        name: user.name,
                        email: user.email
                    }
                }
            }
        },
        removeUser: (state, action) => {
           return state.filter(user => user.id != action.payload)
        }
    }
})

export const {createUser, removeUser} = usersSlice.actions

export default usersSlice.reducer