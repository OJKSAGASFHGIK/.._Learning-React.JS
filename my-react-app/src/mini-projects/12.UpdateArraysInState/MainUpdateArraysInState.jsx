// import s from './css.module.css';
import UpdateArraysInState1 from './UpdateArraysInState1.jsx';
import UpdateArraysInState2 from './UpdateArraysInState2.jsx';

function MainUpdateArraysInState({
    title="Update arrays in state:",
    title2="Update arrays of objects in state:",
}){    
    return (
        <>
            <h1 className="line">{title}</h1>
            <UpdateArraysInState1 />
            <h2 className="line2">{title2}</h2>
            <UpdateArraysInState2 />
        </>
    )
}

export default MainUpdateArraysInState