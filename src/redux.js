import { createSlice } from '@reduxjs/toolkit';
import {addNewFruit, removeFruit} from './firebase'

const initialState = {
  items: null,
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    add: (state, action) => {
      addNewFruit(action.payload);
    },
    remove: (state, action) => {
      removeFruit(action.payload);
    },
    initial: (state, action) => {
      state.items = action.payload;
    },
  },
})

export const { add, remove, initial } = listSlice.actions;
export default listSlice.reducer;