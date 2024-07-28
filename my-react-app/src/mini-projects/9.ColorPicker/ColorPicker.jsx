// import s from './css.module.css';
import React, {useState} from "react";

function ColorPicker({title="Color Picker // useState"}){    
    const [a1Color, a1SetColor] = useState("#FFFFFF");

    function funcColorChange(a1){
        return a1SetColor(a1.target.value);
    }
    
    return (
        <>
            <div className="line">{title}</div>
            <div className="" style={{backgroundColor: a1Color}}>
                <p>Selected Color: {a1Color}</p>
            </div>
            <label>
                Color:
                <input type="color" value={a1Color} onChange={funcColorChange} />
            </label>
        </>
    )
}

export default ColorPicker