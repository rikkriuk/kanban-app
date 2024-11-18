import React from "react";
import AddTaskModal from "./AddTaskModal";

const Navbar = ({ toggle, handleToggle}) => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Kanban App</a>
        </div>
        <div className="flex-none">
          <button onClick={handleToggle} className="btn btn-primary">Add Task</button>
        </div>
      </div>

      {toggle && <AddTaskModal />}
    </>
  )
};

export default Navbar;
