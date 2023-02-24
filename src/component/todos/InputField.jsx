import React from "react";
import { useState } from "react";
import "../../../src/index.css";

function InputField({ onSubmitForm }) {
  const [task, setTask] = useState("");

  
  const handleSubmitForm = (event) => {
    event.preventDefault();
    onSubmitForm(task);
    setTask("");
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };
  return (
    <div className="book-create">
      <h3>Add a task</h3>
      <form onSubmit={handleSubmitForm}>
        <label>ToDos:</label>
        <input
          className="input"
          value={task}
          placeholder="Enter your Task Here"
          onChange={handleChange}
        />
        <button className="button">Submit!</button>
      </form>
    </div>
  );
}

export default InputField;
