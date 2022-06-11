import { useState } from 'react';
import HS from './List.module.css';

import { saveNote, deleteNote, editNote } from '../../store/reducers/notesSlice';
import { changeActiveTag, reActiveTag, deleteTag } from '../../store/reducers/tagsSlice';
import { useDispatch } from 'react-redux';

const ListItem = (props) => {
    const [changeText, setChangeText] = useState(props.data);
    const dispatch = useDispatch();
    const megaEditor = props.editor;

    const saveData = () => {
        dispatch(saveNote({id: props.id, text: changeText, editor: props.editor}));
        dispatch(reActiveTag())
    }

    const editData = () => {
        dispatch(editNote({id: props.id, text: changeText, editor: props.editor}));
        const checkTest = changeText.split(' ');
        checkTest.forEach(item => {
            if (item.indexOf('#') !== -1) {
                dispatch(changeActiveTag({item}));
            }
        })
    }

    const deletNote = () => {
        dispatch(deleteNote({id: props.id}));
        const checkTest = changeText.split(' ');
        checkTest.forEach(item => {
            if (item.indexOf('#') !== -1) {
                dispatch(deleteTag({item}));
            }
        })
    }

    const editMode = megaEditor ?
        <><input className={HS.inputListItem} onInput={(e) => setChangeText(e.target.value)}  type='text' defaultValue={changeText}></input>
        <button onClick={saveData} className={HS.editButton}>save</button></> :
        <><div>{props.data}</div>
        <button onClick={editData} className={HS.editButton}>edit</button></>

    return (
        <div className={HS.listItemContainer}>
            {editMode}
            <button className={HS.deleteButton} onClick={deletNote}>delete</button>
        </div>

    )
}

export default ListItem;