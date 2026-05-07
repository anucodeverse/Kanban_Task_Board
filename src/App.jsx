import { useEffect, useMemo, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import TaskForm from "./components/TaskForm";
import Column from "./components/Column";

const STORAGE_KEY = "kanban-board-tasks";

const columns = [
  { id: "todo", title: "To Do" },
  { id: "progress", title: "In Progress" },
  { id: "done", title: "Done" },
];

const starterTasks = [
  {
    id: "task-1",
    title: "Plan the board layout",
    priority: "Medium",
    status: "todo",
  },
  {
    id: "task-2",
    title: "Build reusable React components",
    priority: "High",
    status: "progress",
  },
  {
    id: "task-3",
    title: "Test local storage",
    priority: "Low",
    status: "done",
  },
];

function createId() {
  if (window.crypto && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `task-${Date.now()}`;
}

function getSavedTasks() {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);

    if (!savedTasks) {
      return starterTasks;
    }

    const parsedTasks = JSON.parse(savedTasks);

    if (!Array.isArray(parsedTasks)) {
      return starterTasks;
    }

    const validStatusIds = columns.map((column) => column.id);

    return parsedTasks
      .filter((task) => task && task.id && task.title)
      .map((task) => ({
        id: task.id,
        title: task.title,
        priority: ["High", "Medium", "Low"].includes(task.priority)
          ? task.priority
          : "Medium",
        status: validStatusIds.includes(task.status) ? task.status : "todo",
      }));
  } catch (error) {
    return starterTasks;
  }
}

function App() {
  const [tasks, setTasks] = useState(getSavedTasks);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    const search = searchText.trim().toLowerCase();

    if (!search) {
      return tasks;
    }

    return tasks.filter((task) => task.title.toLowerCase().includes(search));
  }, [tasks, searchText]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === "done").length;

  function addTask(title, priority) {
    const cleanTitle = title.trim();

    if (!cleanTitle) {
      return;
    }

    const newTask = {
      id: createId(),
      title: cleanTitle,
      priority,
      status: "todo",
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
  }

  function deleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  }

  function moveTask(taskId, newStatus) {
    const validColumnIds = columns.map((column) => column.id);

    if (!validColumnIds.includes(newStatus)) {
      return;
    }

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  function editTask(taskId, newTitle) {
    const cleanTitle = newTitle.trim();

    if (!cleanTitle) {
      return;
    }

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, title: cleanTitle } : task
      )
    );
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) {
      return;
    }

    moveTask(active.id, over.id);
  }

  function resetBoard() {
    const confirmed = window.confirm(
      "This will reset your board to the sample tasks. Continue?"
    );

    if (confirmed) {
      setTasks(starterTasks);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(starterTasks));
    }
  }

  function clearBoard() {
    const confirmed = window.confirm("Do you want to clear all tasks?");

    if (confirmed) {
      setTasks([]);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
  }

  return (
    <main className="app">
      <nav className="navbar">
        <div className="brand">
          <div className="brandMark">K</div>
          <div>
            <strong>KanbanFlow</strong>
            <span>React Task Board</span>
          </div>
        </div>

        <div className="navActions">
          <button className="ghostButton" onClick={resetBoard}>
            Reset
          </button>
          <button className="dangerButton" onClick={clearBoard}>
            Clear
          </button>
        </div>
      </nav>

      <section className="hero">
        <div>
          
          <h1>Manage daily tasks with a clean Kanban workflow.</h1>
          <p className="heroText">
            A polished Trello-style board built with React components, props,
            state, localStorage, search, editing, priority labels and drag-and-drop.
          </p>
        </div>

        <div className="statsGrid">
          <div className="statCard">
            <span>Total Tasks</span>
            <strong>{totalTasks}</strong>
          </div>

          <div className="statCard">
            <span>Completed</span>
            <strong>{completedTasks}</strong>
          </div>
        </div>
      </section>

      <section className="topPanel">
        <TaskForm onAddTask={addTask} />

        <div className="searchBox">
          <label htmlFor="search">Search Tasks</label>
          <input
            id="search"
            type="text"
            placeholder="Search by task name..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>
      </section>

      <DndContext onDragEnd={handleDragEnd}>
        <section className="board">
          {columns.map((column) => {
            const columnTasks = filteredTasks.filter(
              (task) => task.status === column.id
            );

            return (
              <Column
                key={column.id}
                column={column}
                tasks={columnTasks}
                columns={columns}
                onDeleteTask={deleteTask}
                onMoveTask={moveTask}
                onEditTask={editTask}
              />
            );
          })}
        </section>
      </DndContext>

      <footer className="footer">
        Built with React, Vite, useState, props, localStorage and dnd-kit.
      </footer>
    </main>
  );
}

export default App;