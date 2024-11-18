import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AddTaskModal from "../components/AddTaskModal";
import useForm from "../hooks/useForm";
import { postTasks, getTasksById } from "../utils/api";
import validateForm from "../utils/validator";

const ModalContainer = () => {
   const [toggle, setToggle] = useState(false);
   const [form, handleChange] = useForm({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      tag: ""
   });
   const [errors, setErrors] = useState({});

   // handle toggle task modal
   const handleToggle = () => {
     setToggle(!toggle);
   }

   // handle submit task
   const handleSubmit = (e) => {
      e.preventDefault();
      if (!validateForm(form, setErrors)) {
         return;
      }

      // get tasks by id and push new task to tasks array
     getTasksById(1)
     .then((res) => {
         const newForm = { ...form, id: new Date().getTime() }
         res.data.tasks.push(newForm)

         postTasks(res.data, 1);
         setToggle(false);
         alert("Task added successfully");
         window.location.reload();
     })
   }

   return (
      <>
         <Navbar 
         toggle={toggle} 
         handleToggle={handleToggle} 
         />

         {toggle && 
         <AddTaskModal 
         handleToggle={handleToggle}
         form={form}
         handleChange={handleChange}
         handleSubmit={handleSubmit}
         errors={errors}
         />}
      </>
   )
}

export default ModalContainer;