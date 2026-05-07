import { useEffect, useState } from "react";
import { useDraggable } from "@dnd-kit/core";

function TaskCard({ task, columns, onDeleteTask, onMoveTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  useEffect(() => {
    setEditedTitle(task.title);
  }, [task.title]);

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
    });

  const dragStyle = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const availableColumns = columns.filter((column) => column.id !== task.status);

  function saveEdit() {
    const cleanTitle = editedTitle.trim();

    if (!cleanTitle) {
      setEditedTitle(task.title);
      setIsEditing(false);
      return;
    }

    onEditTask(task.id, cleanTitle);
    setIsEditing(false);
  }

  function handleEditKeyDown(event) {
    if (event.key === "Enter") {
      saveEdit();
    }

    if (event.key === "Escape") {
      setEditedTitle(task.title);
      setIsEditing(false);
    }
  }

  return (
    <article
      ref={setNodeRef}
      style={dragStyle}
      className={`taskCard priority${task.priority} ${
        isDragging ? "dragging" : ""
      }`}
    >
      <div className="cardTop">
        <span className="priorityBadge">{task.priority}</span>

        <button
          type="button"
          className="deleteButton"
          onClick={() => onDeleteTask(task.id)}
          aria-label="Delete task"
        >
          ×
        </button>
      </div>

      {isEditing ? (
        <input
          className="editInput"
          value={editedTitle}
          autoFocus
          onChange={(event) => setEditedTitle(event.target.value)}
          onBlur={saveEdit}
          onKeyDown={handleEditKeyDown}
        />
      ) : (
        <h3 className="taskTitle" onClick={() => setIsEditing(true)}>
          {task.title}
        </h3>
      )}

      <div className="cardActions">
        <button type="button" className="dragHandle" {...listeners} {...attributes}>
          Grab
        </button>

        {availableColumns.map((column) => (
          <button
            type="button"
            key={column.id}
            onClick={() => onMoveTask(task.id, column.id)}
          >
            Move to {column.title}
          </button>
        ))}
      </div>
    </article>
  );
}

export default TaskCard;