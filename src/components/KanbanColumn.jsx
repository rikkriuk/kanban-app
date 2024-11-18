import React from "react";
import TaskCard from "./TaskCard";
import { Droppable } from "react-beautiful-dnd";

const KanbanColumn = ({ data }) => {
  return (
    // Droppable component from react-beautiful-dnd
    <Droppable droppableId={String(data.id)}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="flex-1 rounded shadow-md"
        >
          <h3 className="text-lg font-bold mb-4">{data.title}</h3>
          <div className="space-y-4">
            {data.tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} id={data.id} />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default KanbanColumn;
