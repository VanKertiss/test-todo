import HS from './Input.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../../store/reducers/notesSlice';
import { addTag } from '../../store/reducers/tagsSlice';

const Input = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const addNote = () => {
        dispatch(createNote({ text }));
        const checkText = text.split(' ');
        checkText.forEach(item => {
            if (item.indexOf('#') !== -1) {
                dispatch(addTag({item}));
            }
        })
        setText('');
    }

    const addText = (e) => {
        setText(e.target.value);
    }
    return (
        <div className={HS.container}>
            <input onInput={addText} type='text' value={text} className={HS.textInput} />
            <button onClick={addNote} value='create' className={HS.textButton}>create</button>
        </div>
    )
};

export default Input;