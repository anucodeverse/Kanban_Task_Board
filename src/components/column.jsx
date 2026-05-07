import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

function Column({
  column,
  tasks,
  columns,
  onDeleteTask,
  onMoveTask,
  onEditTask,
}) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  return (
    <div ref={setNodeRef} className={`column ${isOver ? "columnOver" : ""}`}>
      <div className="columnHeader">
        <h2>{column.title}</h2>
        <span>{tasks.length}</span>
      </div>

      <div className="taskList">
        {tasks.length === 0 ? (
          <div className="emptyState">Drop tasks here</div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              columns={columns}
              onDeleteTask={onDeleteTask}
              onMoveTask={onMoveTask}
              onEditTask={onEditTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Column;