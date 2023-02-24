import React from "react";
import { useState } from "react";

function ToDoEdit({ content, onChange }) {
  const [title, setTitle] = useState(content.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onChange(content.id, title);
    console.log(content.id, title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}></input>
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default ToDoEdit;
