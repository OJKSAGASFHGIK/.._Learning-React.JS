// import s from './css.module.css';

function TitleId({title="OJKSAGASFHGIK", id}){
    return (
        <>
            <h1 className="line" id={id}>{title}</h1>
        </>
    )
}

export default TitleId