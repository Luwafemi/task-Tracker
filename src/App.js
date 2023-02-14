import React from "react";
import { FaRegTrashAlt, FaRegBell, FaRegCircle } from "react-icons/fa";
import Form from "./components/Form";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const formElement = React.useRef(null);

  // fetch tasks from server
  React.useEffect(() => {
    let getTasksFromServer = async () => {
      var tasks = await fetch("http://localhost:5000/tasks");
      tasks = await tasks.json();
      setTasks(tasks);
    };
    getTasksFromServer();
  }, []);

  //delete task, on clicking the delete icon
  let deleteTask = async (taskId) => {
    fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "DELETE",
    });

    var tasks = await fetch("http://localhost:5000/tasks");
    tasks = await tasks.json();
    setTasks(tasks);
  };

  return (
    <div className="container">
      <Form formElement={formElement} setTasks={setTasks} />
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <button
          className="btn btn-primary mt-3"
          // on clicking button,toggle form visibility, using .showform CSS-class
          onClick={(e) => {
            formElement.current.classList.toggle("showForm");
          }}
        >
          {" "}
          Add Task{" "}
        </button>
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
