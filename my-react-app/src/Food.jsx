function Food(){
    const food1 = "banana";
    const food2 = "lemon";
    
    return(
        <ul>
            <li>{food1.toUpperCase()}</li>
            <li>{food2}</li>
            <li>apple</li>
        </ul>
    );
}

export default Food