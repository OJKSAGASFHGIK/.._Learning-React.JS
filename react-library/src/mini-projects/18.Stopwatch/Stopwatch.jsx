import s from './css.module.css';

import React, {useState, useRef, useEffect} from "react";

function Stopwatch({title=""}){
    
    const [a1IsRunning, a2SetIsRunning] = useState(false);
    const [a1ElapsedTime, a2SetElapsedTime] = useState(0);
    const a1IntervalIdRef = useRef(null);
    const a1StartTimeRef = useRef(0);
    
    useEffect(() => {
        if(a1IsRunning){
            a1IntervalIdRef.current = setInterval(() => {
                a2SetElapsedTime(Date.now() - a1StartTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(a1IntervalIdRef.current);
        }
    }, [a1IsRunning])
    
    function f1Start(){
        a2SetIsRunning(true);
        a1StartTimeRef.current = Date.now() - a1ElapsedTime;
    }
    function f1Stop(){
        a2SetIsRunning(false);
    }
    function f1Reset(){
        a2SetElapsedTime(0);
        a2SetIsRunning(false);
    }
    function f1FormatTime(){
        let v1Hours = Math.floor(a1ElapsedTime / (1000 * 60 * 60));
        let v1Minutes = Math.floor(a1ElapsedTime / (1000 * 60) % 60);
        let v1Seconds = Math.floor(a1ElapsedTime / (1000) % 60);
        let v1Milliseconds = Math.floor((a1ElapsedTime % 1000) / 10);

        v1Hours = String(v1Hours).padStart(2, "0");
        v1Minutes = String(v1Minutes).padStart(2, "0");
        v1Seconds = String(v1Seconds).padStart(2, "0");
        v1Milliseconds = String(v1Milliseconds).padStart(2, "0");

        if (v1Hours > 0){
            return `${v1Hours}:${v1Minutes}:${v1Seconds}:${v1Milliseconds}`;
        } else {
            return `${v1Minutes}:${v1Seconds}:${v1Milliseconds}`;
        }
    }
    
    

    return (
        <>
            <div className={s.div}>
                <div>{f1FormatTime()}</div>
                <div>
                    <button onClick={f1Start}>Start</button>
                    <button onClick={f1Stop}>Stop</button>
                    <button onClick={f1Reset}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Stopwatch