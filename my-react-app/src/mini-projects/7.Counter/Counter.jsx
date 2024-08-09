// import s from './css.module.css';
import React, {useState} from 'react';

function Counter({title="Counter // useState() hook", id}){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployment] = useState(false);
    const updateName = () => {
        setName("Greque");
    }
    
    const resetAge = () => {
        setAge(0);
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
    const decrementAge = () => {
        setAge(age - 1);
    }

    const updateEmployment = () => {
        setEmployment(!isEmployed);
    }

    return (
        <>
            <h1 className="line" id={id}>{title}</h1>
            <div className="flex-space-around" style={{fontSize: '3vh'}}>
                <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Update name!</button>
                </div>

                <div>
                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment</button>
                <button onClick={resetAge}>Reset</button>
                <button onClick={decrementAge}>Decrement</button>
                </div>

                <div>
                <p>Is employed: {isEmployed ? "yes" : "no"}</p>
                <button onClick={updateEmployment}>Employ!</button>
                </div>
            </div>
        </>
    );  
}

export default Counter
