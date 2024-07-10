import './../../assets/baseCSS.css';
import style from './Button.module.css';

function AddingCSSToJSX(){
    const button2 = {
        color:"white",
        backgroundColor:"rgba(200, 0, 255, 1)",
        borderRadius:"10px",
        cursor:"pointer",
        fontSize:"9vw",
    }
    
    return(
        <>
        <div className="line">Adding CSS to JSX methods</div>
        <div className="flex-space-around">
            <button className={style.button1}>button 1</button>
            <button style={button2}>button 2</button>
        </div>
        </>
    );
}

export default AddingCSSToJSX