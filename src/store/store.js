import { configureStore } from '@reduxjs/toolkit';
import listReducer from './listSlice.js';

const store = configureStore({
    reducer: {
        list: listReducer,
    },
});

export { store };
