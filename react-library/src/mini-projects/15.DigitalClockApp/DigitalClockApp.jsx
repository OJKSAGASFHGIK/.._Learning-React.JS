import s from './css.module.css';

import React, {useState, useEffect} from "react";

function DigitalClockApp({title="Digital Clock App", id}){
    const [a1Time, a2SetTime] = useState(new Date());
    function f1PadZero(v1Number){
        return (v1Number < 10 ? `0${v1Number}` : `${v1Number}`);
    }
    function f1FormatTime(){
        let v1Hours = a1Time.getHours();
        let v1Minutes = a1Time.getMinutes(); let v2Minutes = f1PadZero(v1Minutes);
        const v1Seconds = a1Time.getSeconds(); let v2Seconds = f1PadZero(v1Seconds);
        const v1Meridiem = v1Hours >= 12 ? "PM" : "AM";

        v1Hours = v1Hours % 12 || 12; let v2Hours = f1PadZero(v1Hours);
        return `${v2Hours}:${v2Minutes}:${v2Seconds} ${v1Meridiem}`;
    }
    useEffect(() => {
        const v1IntervalId = setInterval(() => {
            a2SetTime(new Date());
        }, 1000) // What is this '1000'?
        return () => {
            clearInterval(v1IntervalId);
        }
    }, [a1Time]);

    return (
        <div>
            <h1 className="line" id={id}>{title}</h1>
            <div className={s.div}>
                <div >{f1FormatTime()}</div>
            </div>
        </div>
    )
}

export default DigitalClockApp