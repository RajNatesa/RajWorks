import React from "react";
import { useState, useEffect } from "react";
import InputField from "./InputField";
import ToDoList from "./ToDoList";
import { SourceData } from "../context/Context";
import axios from "axios";

function ToDo() {
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    // setToDo(JSON.parse(localStorage.getItem("todo")) || []);
    getToDo();
  }, []);

  // useEffect(() => {
  //   // localStorage.setItem("todo", JSON.stringify(toDo));
  //   putToDo();
  // }, [toDo]);

  const getToDo = async () => {
    try {
      const result = await axios.get(
        "https://myfirsttodo-7aaed-default-rtdb.firebaseio.com/New-todo.json"
      );
      setToDo(result.data);
      console.log("toDoFromApp", result);
    } catch (error) {}
  };

  const putToDo = async (toDo) => {
    try {
      const result = await axios.put(
        "https://myfirsttodo-7aaed-default-rtdb.firebaseio.com/New-todo.json",
        JSON.stringify(toDo)
      );
      console.log("toDoFromApp", result);
      setToDo(toDo);
    } catch (error) {}
  };

  const createToDo = (title) => {
    if (toDo?.length > 0) {
      const newToDo = [
        ...toDo,
        { id: Math.round(Math.random() * 9999), title: title },
      ];
      putToDo(newToDo);
    } else {
      putToDo([{ id: Math.round(Math.random() * 9999), title: title }]);
    }
  };

  const handleDelete = (id) => {
    const filteredTodo = toDo?.filter((todo) => {
      return todo.id !== id;
    });
    putToDo(filteredTodo);
  };

  const editTitleById = (id, newTitle) => {
    const updatedToDo = toDo?.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTitle };
      }
      return todo;
    });
    putToDo(updatedToDo);
  };

  // // window.localStorage.setItem("todo", JSON.stringify(toDo));
  // let retrieveData = JSON.parse(localStorage.getItem("todo"));
  // console.log("localStorage", retrieveData);

  return (
    <>
      <div className="app">
        <h1>ToDo List</h1>
        <SourceData.Provider
          value={{
            val: toDo,
            setterMethod: handleDelete,
            editMethod: editTitleById,
          }}
        >
          <ToDoList toDos={toDo} />
          <InputField onSubmitForm={createToDo} />
        </SourceData.Provider>
      </div>
    </>
  );
}

export default ToDo;
