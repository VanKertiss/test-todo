import HS from './Input.module.css';

const Input = () => {
    return (
        <div className={HS.container}>
            <input type='text' className={HS.textInput} />
            <input type='submit' value='create' className={HS.textButton} />
        </div>
    )
};

export default Input;