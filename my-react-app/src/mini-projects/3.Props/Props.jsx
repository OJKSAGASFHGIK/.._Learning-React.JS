import './css.css';
import './../../assets/baseCSS.css';

function Props(props){
    return(
        <>
        <div>
            <div className="line">Properties</div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
        </>
    );
}

export default Props