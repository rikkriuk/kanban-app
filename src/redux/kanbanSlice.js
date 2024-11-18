import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  columns: [],
};

// Create a slice for the kanban
const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    setColumns(state, action) {
      state.columns = action.payload;
    },
    moveTask(state, action) {
      const { source, destination } = action.payload;

      const sourceColumn = state.columns.find(
        (col) => col.id.toString() === source.droppableId
      );
      const destinationColumn = state.columns.find(
        (col) => col.id.toString() === destination.droppableId
      );

      const [movedTask] = sourceColumn.tasks.splice(source.index, 1);
      destinationColumn.tasks.splice(destination.index, 0, movedTask);
    },
  },
});

const { setColumns, moveTask } = kanbanSlice.actions;

export { setColumns, moveTask };
export default kanbanSlice.reducer;
