import React from "react";

const Form = ({ formElement, setTasks }) => {
  const [taskName, setTaskName] = React.useState("");
  const [reminder, setReminder] = React.useState("");
  let addTask = async (e) => {
    e.preventDefault();
    //Add a new task
    await fetch(`http://localhost:5000/tasks/`, {
      method: "POST",
      body: JSON.stringify({
        taskName,
        reminder,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    formElement.current.classList.remove("showForm");
    //fetch tasks from server
    var tasks = await fetch("http://localhost:5000/tasks");
    tasks = await tasks.json();
    setTasks(tasks);
    setTaskName("");
    setReminder("");
  };
  return (
    <form
      onSubmit={(e) => {
        addTask(e);
      }}
      ref={formElement}
      style={{ display: "none" }}
    >
      <div className="row mb-3 mt-3">
        <label htmlFor="taskName" className="col-sm-2 col-form-label">
          Task:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="taskName"
            name="taskName"
            value={taskName}
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
            required
          />
        </div>
      </div>
      <fieldset className="row mb-3">
        <legend className="col-form-label col-sm-2 pt-0">Reminder:</legend>
        <div className="col-sm-10">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="reminder"
              id="reminderTrue"
              value="true"
              checked={reminder === "true"}
              required
              onChange={(e) => {
                setReminder(e.target.value);
              }}
            />
            <label className="form-check-label" htmlFor="reminderTrue">
              True
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="reminder"
              id="reminderFalse"
              value="false"
              checked={reminder === "false"}
              onChange={(e) => {
                setReminder(e.target.value);
              }}
            />
            <label className="form-check-label" htmlFor="reminderFalse">
              False
            </label>
          </div>
        </div>
      </fieldset>
      <button type="submit" className="btn btn-secondary ">
        Add
      </button>
    </form>
  );
};

export default Form;
