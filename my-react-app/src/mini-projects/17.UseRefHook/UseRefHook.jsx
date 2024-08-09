import s from './css.module.css';

import React, {useRef} from "react";

function UseRefHook({title="useRef() hook", id}){
    /*
    let [a1Number, a2SetNumber] = useState(0);
    function f1Click(){
        a2SetNumber(a1 => a1 + 1);
    }
    */
    const a1RefInput1 = useRef(null);
    const a1RefInput2 = useRef(null);
    const a1RefInput3 = useRef(null);

    function f1ConsoleLog(){
        console.log("17.useRef() Hook rendered");
    }
    function f1Click1(){
        a1RefInput1.current.focus();
        a1RefInput1.current.style.backgroundColor = "magenta";
        a1RefInput2.current.style.backgroundColor = "";
        a1RefInput3.current.style.backgroundColor = "";
        f1ConsoleLog();
    }
    function f1Click2(){
        a1RefInput2.current.focus();
        a1RefInput1.current.style.backgroundColor = "";
        a1RefInput2.current.style.backgroundColor = "yellow";
        a1RefInput3.current.style.backgroundColor = "";
        f1ConsoleLog();
    }
    function f1Click3(){
        a1RefInput3.current.focus();
        a1RefInput1.current.style.backgroundColor = "";
        a1RefInput2.current.style.backgroundColor = "";
        a1RefInput3.current.style.backgroundColor = "cyan";
        f1ConsoleLog();
    }
    
    return (
        <>
            <h1 className="line" id={id}>{title}</h1>
            <div className={s.div}>
                <label>
                    Hmm:
                    <input ref={a1RefInput1} />
                    <button onClick={f1Click1}>Click</button>
                </label><br />
                <label>
                    Hmm:
                    <input ref={a1RefInput2} />
                    <button onClick={f1Click2}>Click</button>
                </label><br />
                <label>
                    Hmm:
                    <input ref={a1RefInput3} />
                    <button onClick={f1Click3}>Click</button>
                </label><br />
            </div>
        </>
    )
}

export default UseRefHook