import React from "react";
function Task(props) {
  return (
    <div draggable className="shadow p-3 mb-1 bg-white rounded text-dark">
      <div className="row">
        <div className="col-sm-9">
          <p>{props.task.description}</p>
        </div>
        <div className="col-sm-3">
          <button className="btn" onClick={() => props.onDelete(props.task)}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
