// import s from './css.module.css';
import React, {useState} from "react";

function UpdaterFunctions({title="Updater Functions", id}){    
    const [a1Count, a1SetCount] = useState(0);

    function func1Increment(){
        a1SetCount(a1 => a1 + 1);
        a1SetCount(a1 => a1 + 1);
        a1SetCount(a1 => a1 + 1);
    }
    function func1Reset(){
        a1SetCount(a1 => a1 = 0);
    }
    function func1Decrement(){
        a1SetCount(a1 => a1 - 1);
        a1SetCount(a1 => a1 - 1);
        a1SetCount(a1 => a1 - 1);
    }


    return (
        <>
            <h1 className="line" id={id}>{title}</h1>
            <div>
                <p>Counter = {a1Count}</p>
                <div>
                    <button onClick={func1Increment}>Increment</button>
                    <button onClick={func1Reset}>Reset</button>
                    <button onClick={func1Decrement}>Decrement</button>
                </div>
            </div>
        </>
    )
}

export default UpdaterFunctions