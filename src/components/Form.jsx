import React from "react";

const ToDoForm = ({ handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Task:
        <input type="text" name="name" placeholder="enter your to-do task here..." />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ToDoForm;