import s from './UseEffectHook.module.css';

import React, {useState, useEffect} from "react";

function UseEffectHook1({title="Base (update title)"}){
    const [a1Counter, a2SetCounter] = useState(0);
    function f1SetCount(){
        a2SetCounter(a1 => a1 + 1);
    }
    function f1SetLessCount(){
        a2SetCounter(a1 => a1 - 1);
    }  

    const [a1Color, a2SetColor] = useState("");
    function f1ChangeColor(){
        a2SetColor(a1 => a1 === "green" ? "red" : "green");
    }

    useEffect(() => {
        document.title = `Counter: ${a1Counter} ${a1Color};`;
    }, [a1Counter, a1Color]);

    return (
        <div className={s.div}>
            <h2 className="line2">{title}</h2>
            <div>
                <p style={{backgroundColor: a1Color}}>{a1Counter}</p>
                <button onClick={f1SetCount}>More</button>
                <button onClick={f1SetLessCount}>Less</button>
                <button onClick={f1ChangeColor}>Change Color</button>
            </div>
        </div>
    )
}

export default UseEffectHook1