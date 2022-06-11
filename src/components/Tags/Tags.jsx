import { useSelector } from "react-redux";
import HS from './Tags.module.css';
import TagItem from "./TagItem";

const Tags = () => {

    const data = useSelector(state => state.tags.hashTags);

    const tagsList = data.map(item => {
        return < TagItem key={item.id} active={ item.active } data={item.tag}  />
    })

    return (
        <div className={HS.container}>{tagsList}</div>
    )
}

export default Tags;