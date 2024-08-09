// import s from './css.module.css';

import React, { useContext } from "react";
import { a1UserContext } from './A1Context.jsx'; 

function A3Context({title="OJKSAGASFHGIK"}){    
    const a1User = useContext(a1UserContext); 

    return (
        <>
            <p>Goodbye {a1User}!</p>
        </>
    )
}

export default A3Context