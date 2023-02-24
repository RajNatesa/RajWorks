import React from "react";
import ToDoShow from "./ToDoShow";

function ToDoList({ toDos }) {
  const renderedToDos = toDos?.map((todo) => {
    return <ToDoShow key={todo.id} content={todo} />;
  });

  return <div className="book-list">{renderedToDos}</div>;
}

export default ToDoList;
