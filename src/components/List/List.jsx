import HS from './List.module.css';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

const List = (props) => {
    const notesData = useSelector((state) => state.notes.textData)
    const dataList = notesData.map(item => {
        return < ListItem key={item.id} data={item.text} id={item.id} editor={item.editor} />
    })

    return (
        <div className={HS.container}>
            {dataList}
        </div>
    )
}

export default List