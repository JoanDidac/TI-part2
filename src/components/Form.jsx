import React from "react";

const toDoForm = () => {
    return (
     <form className="form">
      <label placeholder="enter your to-do task here...">
        Task:
      <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
     </form>
    );
};

export default Form;