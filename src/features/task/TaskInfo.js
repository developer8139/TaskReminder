import { createSlice } from "@reduxjs/toolkit";


export const TaskInfoSlice = createSlice({
    name: 'task',
    initialState: {
        name: '',
        done: false,
        important: false
    },
    reducers: {
        finished: (state) => {
            state.done = !state.done
        },

        importance: (state) => {
            state.important = !state.important
        },
        title: (state, action) => {
            state.name = action.payload
        },
    },
})


export const { finished, importance, title } = TaskInfoSlice.actions;

export default TaskInfoSlice.reducer