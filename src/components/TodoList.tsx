import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { TodoType } from "../types/Types";
import "../css/TodoList.css";

function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo);

  return (
    <div className="todo-list">
      {todos && todos.length > 0 ? (
        todos.map((todo: TodoType) =>
           <Todo key={todo.id} todoProps={todo} />)
      ) : (
        <div className="todo-list-empty">
          No todos available. Start adding some!
        </div>
      )}
    </div>
  );
}

export default TodoList;
