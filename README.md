# Kanban Task Board

A clean and responsive Kanban-style task management board built with React and Vite.  
This project was created as part of a React learning mission focused on components, props, state management, localStorage, and drag-and-drop interaction.

The goal of this project is to understand the React way of building interfaces: instead of manually changing the DOM, the UI updates automatically when the application state changes.

---

## Preview

The application has three main columns:

- To Do
- In Progress
- Done

Users can create tasks, assign priority, move tasks between columns, edit task titles, delete tasks, search tasks, and drag cards from one column to another.

---

## Features

### Task Management

- Add new tasks to the board
- Delete tasks from any column
- Move tasks using action buttons
- Drag and drop tasks between columns
- Edit a task by clicking on the task title

### Priority System

Each task can be created with a priority level:

- High
- Medium
- Low

The priority is shown on the task card and also represented visually with a colored border.

### Search

A search bar is included at the top of the board.  
Users can filter tasks by typing part of the task name.

### Local Storage

Tasks are saved in the browser using `localStorage`.

This means that when the page is refreshed, the tasks remain available instead of disappearing.

### Responsive Design

The layout works on desktop and smaller screens.  
On smaller devices, the columns stack vertically for better readability.

---

## Tech Stack

- React.js
- Vite
- JavaScript
- CSS
- dnd-kit
- localStorage

---

## React Concepts Used

This project uses the main React concepts needed for a beginner-to-intermediate task board:

- Functional components
- Props
- useState
- useEffect
- useMemo
- Conditional rendering
- List rendering with `.map()`
- Event handling
- Component-based folder structure
- State-driven UI updates

---

## Project Structure

```txt
kanban-task-board
│
├── public
│
├── src
│   ├── assets
│   │
│   ├── components
│   │   ├── TaskForm.jsx
│   │   ├── Column.jsx
│   │   └── TaskCard.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
