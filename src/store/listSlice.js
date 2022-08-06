import { createSlice } from '@reduxjs/toolkit';
import { addNewFruit, removeFruit } from '../firebase/firebase.js';

const initialState = {
    items: null,
};

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        add: (state, action) => {
            state.items = [...state.items, action.payload];
            addNewFruit(action.payload);
        },
        remove: (state, action) => {
            state.items = state.items.filter(item => item !== action.payload);
            removeFruit(action.payload);
        },
        initial: (state, action) => {
            state.items = action.payload;
          },
    },
});

export const { add, remove, initial } = listSlice.actions;
export default listSlice.reducer;
