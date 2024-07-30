// import s from './css.module.css';

import React, {useState} from "react";

function UpdateArraysInState1(){    
    const [a1Fruit, a2SetFruit] = useState(["Lemon", "Orange", "Banana", ]);
    
    // Ever study more about the function that you're trying make
    function func1AddFruit(){
        const v1NewFruit = document.getElementById("id1FruitInput").value;
        document.getElementById("id1FruitInput").value = "";

        a2SetFruit(a1 => [...a1, v1NewFruit]);
    }
    function func1RemoveFruit(index){
        a2SetFruit(a1 => a1.filter((_, i) => i !== index));
    } // Go deep about it

    return (
        <>
            <div>
                <h2>List of fruits (click to remove):</h2>
                <ul>
                    {a1Fruit.map((a1, index) =>
                    <li key={index} onClick={() => func1RemoveFruit(index)}
                    style={{cursor: "pointer", display: "list-item", width: "fit-content"}}>
                        {a1}
                    </li>)}
                </ul>
                <div>
                    <input type="text" id="id1FruitInput" placeholder="Add a fruit!" />
                    <button onClick={func1AddFruit}>⬏</button>
                </div>
            </div>
        </>
    )
}

export default UpdateArraysInState1