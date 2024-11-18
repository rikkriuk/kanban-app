import React from "react";
import KanbanContainer from "./containers/KanbanContainer";
import ModalContainer from "./containers/ModalContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => (
  <Provider store={store}>
    <ModalContainer />
    <KanbanContainer />
  </Provider>
);

export default App;
