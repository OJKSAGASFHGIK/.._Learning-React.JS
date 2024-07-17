import s from './css.module.css';

function Click_Events(){
    let counter = 0;
    const clickFunction = (a1) => {
        if(counter < 3){
            counter++;
            a1.target.textContent= `You clicked me ${counter} times Greque.` ;
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