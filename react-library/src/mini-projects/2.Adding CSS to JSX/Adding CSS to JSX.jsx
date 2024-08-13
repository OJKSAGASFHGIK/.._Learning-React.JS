import './../../assets/baseCSS.css';
import style from './div.module.css';

function AddingCSSToJSX({ id }){
    const style1 = {
        color:"white",
        backgroundColor:"rgba(200, 0, 255, 1)",
        borderRadius:"10px",
        fontSize:"9vw",
    }
    
    return(
        <>
        <h1 className="line" id={id}>Adding CSS to JSX methods</h1>
        <div className="flex-space-around">
            <div className={style.div1}>div 1</div>
            <div style={style1}>div 2</div>
        </div>
        </>
    );
}

export default AddingCSSToJSX