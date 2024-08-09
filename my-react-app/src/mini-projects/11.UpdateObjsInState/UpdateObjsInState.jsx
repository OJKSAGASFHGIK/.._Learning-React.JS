// import s from './css.module.css';
import React, {useState} from "react";

function UpdateObjsInState({title="Update objects in state", id}){    
    const [a1Car, a1SetCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang",
    });

    // The functions below are the points that you need know
    function func1YearChange(v1){
        a1SetCar(v => ({...v, year: v1.target.value}));
    }
    function func1MakeChange(v1){
        a1SetCar(v => ({...v, make: v1.target.value}));
    }
    function func1ModelChange(v1){
        a1SetCar(v => ({...v, model: v1.target.value}));
    }

    return (
        <>
            <h1 className="line" id={id}>{title}</h1>
            <p>Your favorite car is: {a1Car.year} {a1Car.make} {a1Car.model}</p>
            <div>
                <input type="number" value={a1Car.year} onChange={func1YearChange} /><br />
                <input type="text" value={a1Car.make} onChange={func1MakeChange} /><br />
                <input type="text" value={a1Car.model} onChange={func1ModelChange} /><br />
            </div>
        </>
    )
}

export default UpdateObjsInState