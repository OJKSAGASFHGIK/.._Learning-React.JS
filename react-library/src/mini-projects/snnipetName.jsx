// import s from './css.module.css';

function Snnipet({title="OJKSAGASFHGIK"}){
    if (title !== "OJKSAGASFHGIK"){
        return (
            <>
                <div className="line">{title}</div>
            </>
        );
    } else { return null; }
}

export default Snnipet