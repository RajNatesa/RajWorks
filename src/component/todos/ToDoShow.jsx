import React from "react";
import { useState } from "react";
import ToDoEdit from "./ToDoEdit";
import { useContext } from "react";
import { SourceData } from "../context/Context";

function ToDoShow({ content, onDelete, onEdit }) {
  const [toDoEdit, setToDoEdit] = useState(false);
  const [toDoDone, setToDoDone] = useState(false);
  const childContext = useContext(SourceData);

  const handleEditToDo = () => {
    setToDoEdit(!toDoEdit);
  };

  const handleSubmit = (id, title) => {
    setToDoEdit(false);
    childContext.editMethod(id, title);
  };

  let show = <h3>{content.title}</h3>;
  if (toDoEdit) {
    show = <ToDoEdit content={content} onChange={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img
        alt="books"
        src={`https://picsum.photos/seed/${content.id}/300/200`}
      />
      {show}
      <div className="actions">
        <button className="edit" onClick={handleEditToDo}>
          Edit
        </button>
        <button
          className="delete"
          onClick={() => childContext.setterMethod(content.id)}
        >
          Delete
        </button>
        <input
          style={{ border: 10 + "px" }}
          type="checkbox"
          value={toDoDone}
          onChange={(event) => {
            setToDoDone(event.target.checked);
          }}
        />
      </div>
    </div>
  );
}

export default ToDoShow;
