// import s from './css.module.css';

import React, { useState, createContext } from "react";
import A2Context from './A2Context.jsx';

export const a1UserContext = createContext();

function A1Context({ title = "Obs: It's for take a valor in a root and repeat to others" }) {
    const [a1User, a2SetUser] = useState("Greque");

    return (
        <>
            <h1 className="line2">{title}</h1>
            <div>
                <p>Hello {a1User}!</p>
                {/* Provided the context value to A2Context using the Provider */}
                <a1UserContext.Provider value={a1User}>
                    <A2Context user={a1User} />
                </a1UserContext.Provider>
            </div>
        </>
    );
}

export default A1Context;
