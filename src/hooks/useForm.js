import React, { useState } from "react";

// custom hook for form handling
const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return [form, handleChange, setForm];
};

export default useForm;
