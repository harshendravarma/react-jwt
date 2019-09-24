const TasksService = {
  getJwtToken: function() {
    let jwtToken = localStorage.getItem("token");
    jwtToken = jwtToken.slice(10, jwtToken.length - 2);
    return jwtToken;
  },
  addTask: function(task) {
    console.log(this.getJwtToken())
    console.log(task);
    return fetch("http://localhost:8080/Tasks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.getJwtToken()
      },
      body: JSON.stringify(task)
    });
  },
  fetchCompletedTasks: function() {
    return fetch("http://localhost:8080/Taskscompleted", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.getJwtToken()
      }
    }).then(response => response.json());
  },
  fetchInProgresTasks: function() {
    return fetch("http://localhost:8080/Tasksinprogress",{
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.getJwtToken()
        }
      }).then(response =>
      response.json()
    );
  },
  DeleteCompletedTasks: function(task) {
    return fetch(`http://localhost:8080/Tasks/${task.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.getJwtToken()
      },body: JSON.stringify(task)
    });
  },
  DeleteInProgressTasks: function(task) {
    task.name = "c";
    return fetch("http://localhost:8080/Tasks/${task.id}", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.getJwtToken()
      }
    });
  },
  uuidv4: function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  },
  x: function(){
    console.log("hihhuuuuuu");
  }
};
export default TasksService;
