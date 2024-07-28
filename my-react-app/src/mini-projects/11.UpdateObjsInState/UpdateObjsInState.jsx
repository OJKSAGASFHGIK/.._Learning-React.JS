// import s from './css.module.css';
import React, {useState} from "react";

function UpdateObjsInState({title="Update objects in state"}){    
    const [a1Car, a1SetCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang",
    });

    function func1YearChange(){}
    function func1MakeChange(){}
    function func1ModelChange(){}

    return (
        <>
            <div className="line">{title}</div>
            <p>Your favorite car is: {a1Car.year} {a1Car.make} {a1Car.model}</p>
            <div>
                <input type="number" value={a1Car.year} /><br />
                <input type="text" value={a1Car.make} /><br />
                <input type="text" value={a1Car.model} /><br />
            </div>
        </>
    )
}

export default UpdateObjsInState