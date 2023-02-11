import React from "react";
import { FaRegTrashAlt, FaRegBell, FaRegCircle } from "react-icons/fa";
// import { IconContext } from "react-icons";

function App() {
  const [tasks, setTasks] = React.useState([]);

  // fetch tasks from server
  React.useEffect(() => {
    async function getTasksFromServer() {
      var tasks = await fetch("http://localhost:5000/tasks");
      tasks = await tasks.json();
      setTasks(tasks);
    }
    getTasksFromServer();
  }, []);

  //delete task, on clicking the delete button
  let deleteTask = async (task) => {
    await fetch(`http://localhost:5000/tasks/${task}`, {
      method: "DELETE",
    });

    var tasks = await fetch("http://localhost:5000/tasks");
    tasks = await tasks.json();
    setTasks(tasks);
  };

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

      <ul style={{ listStyle: "none", marginTop: 75, marginBottom: 30 }}>
        {tasks.map((task) => (
          <div key={task.id} style={{ display: "flex", marginBottom: 20 }}>
            <FaRegCircle />
            <span style={{ display: "flex", marginRight: 150, marginLeft: 10 }}>
              <li style={{ marginTop: -4 }}>{task.taskName}</li>
            </span>
            <FaRegBell style={{ marginRight: 20 }} />
            <FaRegTrashAlt
              onClick={() => {
                deleteTask(task.id);
              }}
            />
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
