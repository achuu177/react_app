import { useState } from "react"
import TaskComponent from "../components/TaskComponent"

function Todo(){
    const [tasks, setTasks] = useState(["Task1", "Task2", "Task3"])
    const [taskInput, setTaskInput] = useState("")

    const [num2, setNum2] = useState(20)

    const addTask =() => {
        console.log("clicked")
    }

    const changeHandler = (event) => {
        setTaskInput(event.target.value)
    }

    const updateNums = () =>{
       setNum2(num2+5)
       console.log(num2)
    }

    return(
        <>
        <p>num2 - {num2}</p>
        <TaskComponent test = {num2} setFunction = {setNum2}/>
        <br />
        <button onClick = {updateNums}>Update</button>
        <h1>Todo</h1>
        <input type = "text" onChange={changeHandler}/>
        <button onlick = {addTask}>Add Task</button>
        <p>{taskInput}</p>
        <ul>
            {tasks.map((task, index) => {
                return(
                    <li>{task}</li>
                )
            })}
        </ul>
        </>
    )
}

export default Todo