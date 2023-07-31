import React, {useState} from "react";
import * as events from "events";


const Input =()=>{
    const [message,setMessage] = useState('')
    const [inputValue,setInputValue] = useState('');

    const handleInputChange =() => {
        // eslint-disable-next-line no-restricted-globals
        setInputValue(event.target.value)
    }

    const handleInputButtonClick =()=>{
        setMessage('Hello ' + inputValue)
    }
    return (<div>
        <input  type="text" value={inputValue}
        onChange={handleInputChange}/>
        <button onClick={handleInputButtonClick}> Submit</button>
        <h1>{message}</h1>
    </div>);
}
export default Input;