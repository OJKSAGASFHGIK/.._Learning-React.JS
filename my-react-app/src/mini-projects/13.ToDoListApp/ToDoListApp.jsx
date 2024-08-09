// import s from './css.module.css';

import {useState} from "react";

function ToDoListApp({title="To do list // 'A bunch of array concepts'", id}){
    const [a1Tasks, a2SetTasks] = useState([]);
    const [a3NewTask, a4SetNewTask] = useState("");
    
    function f2InputChange(v1){
        a4SetNewTask(v1.target.value);
    }

    function f2MoveTaskUp(v1Index){
        if(v1Index > 0){
            const v1UpdatedTasks = [...a1Tasks];
            [v1UpdatedTasks[v1Index], v1UpdatedTasks[v1Index - 1]] =
            [v1UpdatedTasks[v1Index - 1], v1UpdatedTasks[v1Index]];
            a2SetTasks(v1UpdatedTasks);
        }
    }
    function f2MoveTaskDown(v1Index){
        if(v1Index < a1Tasks.length - 1){
            const v1UpdatedTasks = [...a1Tasks];
            [v1UpdatedTasks[v1Index], v1UpdatedTasks[v1Index + 1]] =
            [v1UpdatedTasks[v1Index + 1], v1UpdatedTasks[v1Index]];
            a2SetTasks(v1UpdatedTasks);
        }
    }

    function f1AddTask(){
        if(a3NewTask.trim() !== ""){
            a2SetTasks(a1 => [...a1, a3NewTask]);
            a4SetNewTask("");
        }
    }
    function f1DeleteTask(index){
        const v1UpdatedTasks = a1Tasks.filter((_, i) => i !== index);
        a2SetTasks(v1UpdatedTasks);
    }

    return (
        <>
            <h1 className="line" id={id}>{title} <br />
                (we can until say that this is the good base content about it)</h1>

            <h3>To do list: </h3>
            <div>
                <input type="text" value={a3NewTask} onChange={f2InputChange}
                    placeholder="What you gonna do today? ..." />
                <button onClick={f1AddTask}>Add! </button>
            </div>
            <ul>
                {a1Tasks.map((a1, v1Index) =>
                    <li key={v1Index}>
                        <span>{a1}</span>
                        <button onClick={() => f2MoveTaskUp(v1Index)}>👆</button>
                        <button onClick={() => f2MoveTaskDown(v1Index)}>👇</button>
                        <button onClick={() => f1DeleteTask(v1Index)}>🗑️</button>
                    </li>
                )}
            </ul>
        </>
    )
}

export default ToDoListApp