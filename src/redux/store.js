import { configureStore } from "@reduxjs/toolkit";
import kanbanReducer from "./kanbanSlice";

// Create a Redux store with the kanban reducer
const store = configureStore({
  reducer: {
    kanban: kanbanReducer,
  },
});

export { store };
