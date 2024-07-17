import s from './css.module.css';
import { getFruits, getVegetables } from './data.js';

function Render_Lists(){
    const fruits = getFruits();
    const vegetables = getVegetables();
    /* If you want in a future organize arrays in order: */
    // itemList.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
    // itemList.sort((a, b) => b.name.localeCompare(a.name)); // Reverse alphabetical
    // itemList.sort((a, b) => a.calories - b.calories); // Numeric
    fruits.sort((a, b) => b.calories - a.calories); // Reverse numeric
    vegetables.sort((a, b) => b.calories - a.calories); // Reverse numeric

    // const lowCalItems = itemList.filter(item => item.calories < 100); // Low calories
    // const highCalItems = itemList.filter(item => item.calories >= 100); // High calories

    // Destructure props to extract category and items (itemList)
    // const category = props.category;
    
    const listFruits = fruits.map(item => (
        <li key={item.id}>
            {item.name}: <b>{item.calories}</b>
        </li>
    ));
    const listVegetables = vegetables.map(item => (
        <li key={item.id}>
            {item.name}: <b>{item.calories}</b>
        </li>
    ));

    return(
        <>
        <div className="line">Lists</div>
        <p>(Have some codes for list organization in this file)</p>
        <div className={s.bList}>
            {fruits.length > 0 ?
            <div>
                <h1>Fruits calories:</h1>
                <ol>{listFruits}</ol>
            </div>
            : null}
            {vegetables.length > 0 ?
            <div>
                <h1>Vegetables calories:</h1>
                <ol>{listVegetables}</ol>
            </div>
            : null}
        </div>
        <div>
            <div className="important-line">Note: It's important in React, in your App.jsx, to use variableCategories="withSomeName" and props in tags. I didn't do it here because, for me, organizing data and things like this makes more sense in this form.</div>
            <p>(At least for now)</p>
        </div>
        </>
    );
}

export default Render_Lists