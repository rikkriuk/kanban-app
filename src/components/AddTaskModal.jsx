import React from "react";

const AddTaskModal = ({ handleToggle, form, handleChange, handleSubmit, errors }) => {
  return (
    <section className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add Task</h3>
        <div className="form-control">
          <label className="label">Title</label>
          <input
            name="title"
            value={form?.title}
            type="text"
            onChange={handleChange}
            className={`input input-bordered ${errors?.title ? 'border-red-500' : ''}`}
          />
          {errors?.title && <p className="text-red-500 text-sm">{errors?.title}</p>}
        </div>

        <div className="form-control">
          <label className="label">Description</label>
          <textarea
            name="description"
            value={form?.description}
            onChange={handleChange}
            className={`textarea textarea-bordered ${errors?.description ? 'border-red-500' : ''}`}
          />
          {errors?.description && <p className="text-red-500 text-sm">{errors?.description}</p>}
        </div>

        <div className="form-control">
          <label className="label">Start Date</label>
          <input
            name="startDate"
            value={form?.startDate}
            onChange={handleChange}
            type="date"
            className={`input input-bordered ${errors?.startDate ? 'border-red-500' : ''}`}
          />
          {errors?.startDate && <p className="text-red-500 text-sm">{errors?.startDate}</p>}
        </div>

        <div className="form-control">
          <label className="label">End Date</label>
          <input
            name="endDate"
            value={form?.endDate}
            onChange={handleChange}
            type="date"
            className={`input input-bordered ${errors?.endDate ? 'border-red-500' : ''}`}
          />
          {errors?.endDate && <p className="text-red-500 text-sm">{errors?.endDate}</p>}
        </div>

        <div className="form-control">
          <label className="label">Tag</label>
          <select
            name="tag"
            value={form?.tag}
            onChange={handleChange}
            className={`select select-bordered ${errors?.tag ? 'border-red-500' : ''}`}
          >
            <option value="">Select a tag</option>
            <option value="Development">Development</option>
            <option value="Testing">Testing</option>
            <option value="Design">Design</option>
          </select>
          {errors?.tag && <p className="text-red-500 text-sm">{errors?.tag}</p>}
        </div>

        <div className="modal-action">
          <button onClick={handleToggle} className="btn">Cancel</button>
          <button onClick={handleSubmit} className="btn btn-primary">Save</button>
        </div>
      </div>
    </section>
  );
};

export default AddTaskModal;
