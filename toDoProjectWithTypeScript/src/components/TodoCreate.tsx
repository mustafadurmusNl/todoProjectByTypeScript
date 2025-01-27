import React, { useState } from "react";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";

function TodoCreate() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (newTodo.trim().length === 0) {
      alert("Please enter a todo");
      return;
    }
    const payload = {
      id: Math.floor(Math.random() * 100),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    console.log("done",payload)
    setNewTodo("");
  };

  return (
    <div className="todo-create">
      <input
        type="text"
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={handleCreateTodo}>Create</button>
      <TodoList />
    </div>
  );
}

export default TodoCreate;
