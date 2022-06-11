import HS from './Tags.module.css';

const TagItem = (props) => {

    const tag = props.active ? <div className={HS.tagActive} >{props.data}</div> : <div >{props.data}</div>;

    return (
        <>{tag}</>
    )
}

export default TagItem;