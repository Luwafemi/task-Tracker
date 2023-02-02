import React, { useEffect } from "react";
import {
  FaRegTrashAlt,
  FaRegBell,
  FaRegCircle,
  FaRegCheckCircle,
} from "react-icons/fa";

function App() {
  const [tasks, setTasks] = React.useState([]);
  React.useEffect(() => {
    async function getTasksFromServer() {
      var response = await fetch("http://localhost:5000/tasks");
      response = await response.json();
      setTasks(response);
    }
    getTasksFromServer();
  }, []);
  // console.log("ok");

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <button className="btn btn-primary mt-3"> Add Task </button>
      </div>
      {/* <h4 style={{ marginBottom: 50, marginTop:30 ,fontWeight:900, paddingLeft:118}}>
        {" "}
        TASKS{" "}
      </h4> */}
      <ul style={{ listStyle: "none", marginTop:75,marginBottom:30 }}>
        {tasks.map((task) => (
          <div key={task.id} style={{ display: "flex", marginBottom: 20 }}>
            <FaRegCircle />
            <span
              style={{ display: "flex", marginRight: 150, marginLeft: 10 }}
            >
              <li style={{ marginTop: -4 }}>
                {task.taskName}
              </li>
            </span>
            <FaRegBell />
            <span style={{ width: 20 }}></span>
            <FaRegTrashAlt />
            {/* <FaRegCheckCircle /> */}
          </div>
        ))}
      </ul>
      <footer style={{ position: "absolute", bottom: 10, left: "40%" }}>
        <div>'Luwafemi A. &copy;{new Date().getFullYear()}</div>
      </footer>
    </div>
  );
  
  }


export default App;
