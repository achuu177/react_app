import React from "react";

function TaskComponent(props){
    const updateNumFromChild = () => {
          props.setFunction(props.test+10)
    }
    return(
    <>
      <hr />
        <div>props -{props.test}</div>
        <button onClick = {updateNumFromChild} >update from child </button>
      <hr />  
    </>
    )
}

export default TaskComponent