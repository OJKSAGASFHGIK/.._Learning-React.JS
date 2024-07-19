// import s from './css.module.css';
import React, {useState} from 'react';

function Counter({title="Counter(first deepening) // useState() hook"}){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployment] = useState(false);
    const updateName = () => {
        setName("Greque");
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
    const updateEmployment = () => {
        setEmployment(!isEmployed);
    }

    return (
        <>
            <div className="line">{title}</div>
            <div className="flex-space-around" style={{fontSize: '3vh'}}>
                <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Update name!</button>
                </div>
                <div>
                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment age!</button>
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
