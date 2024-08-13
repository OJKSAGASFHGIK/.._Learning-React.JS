import s from './UseEffectHook.module.css';

import React, {useState, useEffect} from "react";

function UseEffectHook2({title="Dinamic sizes (try modify window size)"}){    
    const [a1Width, a2SetWidth] = useState(window.innerWidth);
    const [a1Height, a2SetHeight] = useState(window.innerHeight);
    function f1Resize(){
        a2SetWidth(window.innerWidth);
        a2SetHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", f1Resize);
    });
    useEffect(() => {
        document.title = `W: ${a1Width} / H: ${a1Height}`;
    }, [a1Width, a1Height]);

    return (
        <>
            <h2 className="line2">{title}</h2>
            <div className={s.div}>
                <p>Width: {a1Width}</p>
                <p>Height: {a1Height}</p>
            </div>
        </>
    )
}

export default UseEffectHook2