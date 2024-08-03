// import s from './css.module.css';

import {useState} from "react";

function UpdateArraysInState2(){    
    const [a1Person, a2SetPerson] = useState([]);
    const [a3Name, a4SetName] = useState("Guest");
    const [a3Day, a4SetDay] = useState(1);
    const [a3Month, a4SetMonth] = useState(1);
    const [a3Year, a4SetYear] = useState(new Date().getFullYear() - 18);
    
    function func2ChangeName(v1){
        a4SetName(v1.target.value);
    }
    function func2ChangeDay(v1){
        a4SetDay(v1.target.value);
    }
    function func2ChangeMonth(v1){
        a4SetMonth(v1.target.value);
    }
    function func2ChangeBorn(v1){
        a4SetYear(v1.target.value);
    }

    function func1AddPerson(){
        const v1NewPerson = {
            name: a3Name,
            day: a3Day,
            month: a3Month,
            year: a3Year,
        };

        a2SetPerson(a1 => [...a1, v1NewPerson]);
    }
    function func1RemovePerson(v1RemoveFromIndex){
        a2SetPerson(a1 => a1.filter((_, i) => i !== v1RemoveFromIndex));
    }

    return (
        <>
            <h3>Registering people:</h3>
            <div>
                <label>Name: <input type="text" value={a3Name} onChange={func2ChangeName} /></label><br />
                <label>Born: </label><br />
                <input type="number" value={a3Day} onChange={func2ChangeDay} placeholder="Day"/>
                <input type="number" value={a3Month} onChange={func2ChangeMonth} placeholder="Month"/>
                <input type="number" value={a3Year} onChange={func2ChangeBorn} /><br />
            </div>
            <button onClick={func1AddPerson}>Click to add!! (click on list for remove)</button>
            <h4>List:</h4>
            <ul>
                {a1Person.map((a1Person_, v1ArrayIndex) =>
                <li key={v1ArrayIndex} onClick={() => func1RemovePerson(v1ArrayIndex)}
                style={{cursor: "pointer", display: "list-item", width: "fit-content"}}>
                    
                    {a1Person_.name} - {a1Person_.day}/{a1Person_.month}/{a1Person_.year}
                </li>)}
            </ul>
        </>
    )
}

export default UpdateArraysInState2