import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  function handleSubmit(event) {
    event.preventDefault();

    const cleanTitle = taskTitle.trim();

    if (!cleanTitle) {
      alert("Please enter a task name.");
      return;
    }

    onAddTask(cleanTitle, priority);

    setTaskTitle("");
    setPriority("Medium");
  }

  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <div className="formGroup">
        <label htmlFor="taskTitle">New Task</label>
        <input
          id="taskTitle"
          type="text"
          placeholder="Example: Finish React assignment"
          value={taskTitle}
          onChange={(event) => setTaskTitle(event.target.value)}
        />
      </div>

      <div className="formGroup prioritySelect">
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <button type="submit" className="addButton">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;