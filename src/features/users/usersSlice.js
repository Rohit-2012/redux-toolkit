import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 'abscdei2338u8u',
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
        updateUser: (state, action) => {
            const { id, name, email } = action.payload
            const updatedUser = state.find(user => user.id === id)
            if (updatedUser) { 
                updatedUser.name = name
                updatedUser.email = email
            }
        },
        removeUser: (state, action) => {
           return state.filter(user => user.id != action.payload)
        }
    }
})

export const {createUser, removeUser, updateUser} = usersSlice.actions

export default usersSlice.reducer