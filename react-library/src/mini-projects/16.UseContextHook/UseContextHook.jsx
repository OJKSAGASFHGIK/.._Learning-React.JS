// import s from './css.module.css';

// import React, {useState, useContext} from "react";
import A1Context from './A1Context.jsx';

function UseContextHook({title="useContext() hook", id}){
    return (
        <>
            <h1 className="line" id={id}>{title}</h1>
            <div>
                <A1Context />
            </div>
        </>
    )
}

export default UseContextHook