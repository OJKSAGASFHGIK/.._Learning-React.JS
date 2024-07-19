import s from './css.module.css';

function Click_Events(){
    let some = 0;
    const clickFunction = (a1) => {
        if(some < 3){
            some++;
            a1.target.textContent= `You clicked me ${some} times Greque.` ;
        } else { a1.target.textContent= `Stop clicking me!` ; }
    };
    
    return(
        <>
        <div className="line">Click events</div>
        <div className={s.center}>
            <button onClick={clickFunction} className={s.button}>Click me</button>
        </div>
        <p>(You can use other types. Example: onDoubleClick)</p>
        </>
    );
}

export default Click_Events