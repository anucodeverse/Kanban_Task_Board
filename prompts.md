# Professional ChatGPT Prompts Used for the Kanban Task Board Project

This file contains a set of professional prompts that can be used to understand, improve, debug, and explain the Kanban Task Board project.

The prompts are written around the main React concepts used in this project, such as components, props, state, localStorage, conditional rendering, filtering, and drag-and-drop.

These prompts are not simple “write code” requests. They are focused on learning the logic, understanding decisions, solving doubts, and improving the project in a professional way.

---

## 1. Understanding the Overall React Flow

**Prompt:**

Explain the complete flow of my Kanban Task Board project from a React point of view.  
Focus on how data moves from `App.jsx` to child components, how tasks are updated, and how React re-renders the UI when the state changes.  
Please explain it in a beginner-friendly but professional way.

---

## 2. Understanding useState in This Project

**Prompt:**

In my Kanban Task Board project, I am using `useState` to manage tasks and search text.  
Can you explain why `useState` is needed here, how the task array changes when I add, delete, edit, or move a task, and why this is better than manually changing the DOM?

---

## 3. Understanding Props Between Components

**Prompt:**

My project has components like `TaskForm`, `Column`, and `TaskCard`.  
Can you explain how props are used between these components and why passing functions like `onAddTask`, `onDeleteTask`, `onMoveTask`, and `onEditTask` is a good React pattern?

---

## 4. Improving Component Structure

**Prompt:**

Review the component structure of my Kanban Task Board project.  
The main files are `App.jsx`, `TaskForm.jsx`, `Column.jsx`, and `TaskCard.jsx`.  
Can you explain whether this separation is clean, and suggest any professional improvements without making the project unnecessarily complicated?

---

## 5. Understanding localStorage Logic

**Prompt:**

My Kanban Task Board saves tasks in `localStorage`.  
Can you explain how localStorage works in this project, why `useEffect` is used for saving tasks, and how the project restores saved tasks after a page refresh?

---

## 6. Debugging localStorage Issues

**Prompt:**

Sometimes my Kanban board shows old or incorrect tasks after I change the code.  
Can you explain how localStorage can cause this issue, how to safely clear old saved data, and how to protect the project from broken or invalid saved task data?

---

## 7. Understanding Task Movement Logic

**Prompt:**

In my Kanban Task Board, each task has a `status` value like `todo`, `progress`, or `done`.  
Can you explain how this status controls which column the task appears in, and why the column IDs must match the task status exactly?

---

## 8. Understanding Drag-and-Drop Logic

**Prompt:**

My project uses `dnd-kit` for drag-and-drop.  
Can you explain how `DndContext`, `useDraggable`, `useDroppable`, `active`, and `over` work together when moving a task card from one column to another?

---

## 9. Debugging Drag-and-Drop Problems

**Prompt:**

In my Kanban Task Board, drag-and-drop sometimes does not move the card correctly.  
Can you help me debug the possible reasons, such as mismatched IDs, missing droppable areas, incorrect `handleDragEnd` logic, or invalid task status values?

---

## 10. Understanding Search Filter Logic

**Prompt:**

My project has a search bar that filters tasks by task name.  
Can you explain how the search filtering works, why `toLowerCase()` and `trim()` are useful, and how `useMemo` helps avoid unnecessary recalculations?

---

## 11. Understanding Edit Task Logic

**Prompt:**

In my task card, clicking the task title changes it into an input field for editing.  
Can you explain the logic behind edit mode, why a separate `editedTitle` state is used, and how Enter, Escape, blur, and save behavior should work professionally?

---

## 12. Understanding Priority System

**Prompt:**

My Kanban board has High, Medium, and Low priority options.  
Can you explain how the priority value is stored in each task, how CSS classes are used to visually represent priority, and how this feature can be improved in a professional task management app?

---

## 13. Improving User Experience

**Prompt:**

Review the user experience of my Kanban Task Board.  
Focus on task creation, editing, moving, drag-and-drop, search, empty states, and button labels.  
Suggest improvements that make the app feel more natural and professional without changing the main project requirements.

---

## 14. Improving UI Design Professionally

**Prompt:**

Review the design of my Kanban Task Board like a UI designer.  
Focus on spacing, typography, color consistency, card layout, button styling, shadows, and responsive behavior.  
Suggest improvements that make the design look clean, elegant, and human-made.

---

## 15. Explaining the Project for Interview or Office Review

**Prompt:**

Help me explain my Kanban Task Board project in a professional way for an office review or interview.  
Include what problem it solves, what React concepts I used, how the task flow works, and what features I implemented.

---

## 16. Preparing for Questions About This Project

**Prompt:**

Act like a reviewer and ask me possible technical questions about my Kanban Task Board project.  
Focus on React state, props, localStorage, drag-and-drop, component structure, search logic, and editing behavior.  
Also provide strong sample answers that I can use for practice.

---

## 17. Checking Code Quality

**Prompt:**

Review my Kanban Task Board code for code quality.  
Check whether the function names, component names, state names, and file structure are clear.  
Suggest improvements that make the code easier to read and maintain.

---

## 18. Finding Edge Cases

**Prompt:**

Analyze my Kanban Task Board project and list possible edge cases.  
For example, empty task names, duplicate tasks, broken localStorage data, dragging outside a column, editing a task to an empty value, and searching when no tasks match.  
Suggest how each case should be handled.

---

## 19. Improving Accessibility

**Prompt:**

Review my Kanban Task Board for accessibility.  
Check buttons, inputs, labels, keyboard behavior, focus states, color contrast, and drag-and-drop usability.  
Suggest practical improvements that are suitable for a beginner-to-intermediate React project.

---

## 20. Planning Future Features

**Prompt:**

Suggest future improvements for my Kanban Task Board project.  
Please organize them into beginner, intermediate, and advanced levels.  
Focus on features like due dates, task descriptions, drag sorting, dark mode, backend storage, authentication, and user-specific boards.

---

## 21. Explaining Why React is Better Than Manual DOM Updates

**Prompt:**

Using my Kanban Task Board as an example, explain why React state-based rendering is better than using `document.getElementById` and manually updating the DOM.  
Give examples from adding, deleting, moving, and filtering tasks.

---

## 22. Understanding Conditional Rendering

**Prompt:**

In my Kanban Task Board, I use conditional rendering for edit mode and empty column messages.  
Can you explain how conditional rendering works in this project and where it improves the user experience?

---

## 23. Understanding List Rendering with map()

**Prompt:**

My project uses `.map()` to render columns and task cards.  
Can you explain how list rendering works in React, why each item needs a unique `key`, and what problems can happen if keys are missing or not unique?

---

## 24. Explaining the Project README Professionally

**Prompt:**

Review my README file for the Kanban Task Board project.  
Check whether it clearly explains the project purpose, features, tech stack, setup steps, component structure, usage instructions, and learning outcomes.  
Suggest improvements to make it look more professional for GitHub.

---

## 25. Final Project Review Prompt

**Prompt:**

Review my complete Kanban Task Board project as if you are a senior front-end developer.  
Give feedback on React logic, component structure, user experience, design quality, maintainability, and project presentation.  
Also tell me what parts are strong and what parts I should improve before submitting it.

---

## Notes

These prompts were created to support the development and explanation of the Kanban Task Board project.

They are useful for:

- Understanding React concepts
- Debugging project issues
- Improving UI and UX
- Preparing for project review
- Writing better documentation
- Practicing interview-style explanations

The main focus of these prompts is not just getting code, but understanding the logic behind the project.
