import React, { useState } from 'react';
import s from './css.module.css';

function Conditions({name = "Unknown"}){
    const [message, setMessage] = useState(null);

    const welcomeMessage =
    <div className={s.confirm}>
        Welcome {name}!</div>;
    const byeMessage =
    <div className={s.decline}>
        Bye!</div>;
 
    function func1(){
        setMessage(welcomeMessage);
    }
    function func2(){
        setMessage(byeMessage);
    }

    return(
        <>
        <div className="line">Conditions:</div>
        <div className={s.fontSize}>
            <div className="flex-space-around">
                <button onClick={func1} className={s.greenBall}>Hello!</button>
                <button onClick={func2} className={s.redBall}>Bye!</button>
            </div>
            <div className="flex-space-around">{message}</div>
        </div>
        </>
        
    );
}

export default Conditions