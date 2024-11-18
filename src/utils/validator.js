import React from "react";

// Validate form inputs
const validateForm = (form, setErrors) => {
  let isValid = true;
  const newErrors = {};

  if (!form?.title.trim()) {
    newErrors.title = "Title is required";
    isValid = false;
  }

  if (!form?.description.trim()) {
    newErrors.description = "Description is required";
    isValid = false;
  }

  if (!form?.startDate) {
    newErrors.startDate = "Start date is required";
    isValid = false;
  }

  if (!form?.endDate) {
    newErrors.endDate = "End date is required";
    isValid = false;
  }

  if (!form?.tag) {
    newErrors.tag = "Tag is required";
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
};

export default validateForm;
