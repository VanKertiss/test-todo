import { configureStore } from "@reduxjs/toolkit";

import tagsReducer from './reducers/tagsSlice';
import notesReducer from './reducers/notesSlice';

export const store = configureStore({
    reducer: {
        tags: tagsReducer,
        notes: notesReducer,
    }
})
