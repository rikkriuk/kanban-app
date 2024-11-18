import { Draggable } from "react-beautiful-dnd";
import { getTasksById, postTasks } from "../utils/api";

const TaskCard = ({ task, index, id }) => {
  // handle delete task
  const handleDelete = () => {
    getTasksById(id)
    .then((res) => {
      res.data.tasks.splice(index, 1);
      postTasks(res.data, id);
      alert("Task deleted successfully");
      window.location.reload();
    })
  }

  return (
    // Draggable component from react-beautiful-dnd
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="card bg-base-100 shadow-md"
        >
          <div className="card-body border rounded-xl">
            <h2 className="card-title">{task.title}</h2>
            <p>{task.description}</p>
            <div className="badge badge-outline">{task.tag}</div>
            <div className="text-sm text-gray-500 mt-2 flex flex-col items-start gap-4">
              {task.startDate} - {task.endDate}
              <button onClick={handleDelete} className="btn bg-red-600 hover:bg-red-800">Delete</button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;