import React from "react";
import Task from "./Task";

function InProgressTasks(props) {
  function renderInProgressTasks() {
    if (props.tasks.length === 0) {
      return <p>no tasks to do !!!!!</p>;
    } else {
      return props.tasks.map(task => (
        <div
          draggable
          className="draggable"
          onDragStart={e => onDragStart(e, task)}
        >
          <Task task={task} onDelete={props.onDelete} key={task.id}></Task>
        </div>
      ));
    }
  }
  function onDragStart(e, task) {
    var taskInJson = JSON.stringify(task);
    e.dataTransfer.setData("task", taskInJson);
  }
  
  return (
    <div>
      <p>
        <b>InProgress</b>
      </p>
      <hr></hr>
      {renderInProgressTasks()
      }
    </div>
  );
}

export default InProgressTasks;
