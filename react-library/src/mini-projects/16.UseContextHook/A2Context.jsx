// import s from './css.module.css';

import React, { useContext } from "react";
import { a1UserContext } from './A1Context.jsx';

import A3Context from './A3Context.jsx';

function A2Context() {
    const a1User = useContext(a1UserContext); 

    return (
        <>
            <p>Hello again {a1User}!</p>
            <A3Context />
        </>
    );
}

export default A2Context;
