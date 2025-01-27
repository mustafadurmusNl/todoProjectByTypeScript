import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import "../css/Todo.css";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;
  return (
    <div className="todo">
      <div className="todo-content">{content}</div>
      <div className="todo-actions">
        <FaTrash />
        <FaEdit />
      </div>
    </div>
  );
}

export default Todo;
