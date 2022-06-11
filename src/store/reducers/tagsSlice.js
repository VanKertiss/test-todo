import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    hashTags: [],
}

export const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        addTag(state, action) { 
            if(action.payload.item){
                const item = {id: state.hashTags.length, tag: action.payload.item, active: false}
                state.hashTags.push(item);
            }           
        },
        changeActiveTag(state, action) {
            state.hashTags.forEach(item => {
                if(item.tag === action.payload.item) item.active = true;
            })
        },
        reActiveTag(state, action) {
            state.hashTags.forEach(item => {
                item.active = false;
            })
        },
        deleteTag(state, action) {
            if(action.payload.item){
                state.hashTags = state.hashTags.filter(item => {
                    return item.tag !== action.payload.item;
                })
            } 
        }
    }
});

export const {
    addTag, changeActiveTag, reActiveTag, deleteTag
} = tagsSlice.actions;
export default tagsSlice.reducer;