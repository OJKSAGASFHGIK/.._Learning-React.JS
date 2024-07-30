// import s from './css.module.css';
import UpdateArraysInState1 from './UpdateArraysInState1.jsx';

function MainUpdateArraysInState({
    title="Update arrays in state:",
    title2="Update arrays of objects in state:",
}){    
    return (
        <>
            <h1 className="line">{title}</h1>
            <UpdateArraysInState1 />
            <h3 className="line2">{title2}</h3>
        </>
    )
}

export default MainUpdateArraysInState