import React, { useEffect } from "react";
import KanbanColumn from "../components/KanbanColumn";
import { getTasks } from "../utils/api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { moveTask, setColumns } from "../redux/kanbanSlice";
import { DragDropContext } from "react-beautiful-dnd";

const KanbanContainer = () => {
   const dispatch = useDispatch();
   const columns = useSelector((state) => state.kanban.columns);

   useEffect(() => {
      getTasks().then((response) => {
         dispatch(setColumns(response.data))
      });
   }, [dispatch]);

   // handle drag and drop
   const handleDragEnd = (result) => {
      const { source, destination } = result;
  
      if (!destination) return;
  
      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      ) {
        return;
      }
  
      // Dispatch the moveTask action with the source and destination
      dispatch(moveTask({ source, destination }));
    };

   return (
      <DragDropContext onDragEnd={handleDragEnd}>
         <div className="flex flex-col justify-center gap-5 space-x-4 m-4 md:flex-row md:flex-wrap">
         {columns.map((column) => (
            <KanbanColumn key={column.id} data={column} />
         ))}
         </div>
      </DragDropContext>
   )
}

export default KanbanContainer; 