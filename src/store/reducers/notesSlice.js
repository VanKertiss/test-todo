import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    textData: [],
}

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        createNote(state, action) {
            if(action.payload.text){
                const item = {id: state.textData.length, text: action.payload.text, editor: false};
                state.textData.push(item);
            };
        },
        saveNote (state, action){
            state.textData.forEach(item => {
                if(item.id === action.payload.id){
                    item.text = action.payload.text;
                    item.editor = false;
                }
                
            })
        },
        deleteNote (state, action) {
            state.textData = state.textData.filter(item => {
               return item.id !== action.payload.id
            })
        },
        editNote (state, action) {
            state.textData.forEach(item => {
                if(item.id === action.payload.id){
                    item.editor = true;
                }
                
            })
        }
    }
});

export const {createNote, saveNote, deleteNote, editNote} = notesSlice.actions;
export default notesSlice.reducer;