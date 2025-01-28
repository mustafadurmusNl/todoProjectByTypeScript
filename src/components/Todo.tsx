import {useState} from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import "../css/Todo.css";
import { useDispatch } from "react-redux";
import { removeTodoById } from "../redux/todoSlice";
import { updateTodoById } from "../redux/todoSlice";
interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;
const distpatch = useDispatch()
  const handleRemoveTodo = () => {
    distpatch(removeTodoById(id));

  }
const [editable, setEditable] = useState<boolean>(false);
const [newContent, setNewContent] = useState<string>(content);
const handleUpdateTodo = () => {
  const payload:TodoType = {
    id,
    content: newContent
  }
  distpatch(updateTodoById(payload))
  setEditable(false)
}
  return (
    <div className="todo">
      {editable ? ( <input 
      type="text"
      value={newContent}
      onChange={(e) => setNewContent(e.target.value)}
      />) : (
        <div>{content}</div>
      )}
      <div className="todo-actions">
        <FaTrash onClick={handleRemoveTodo}/>
       {editable ? <FaCheck onClick={handleUpdateTodo}/> : <FaEdit onClick={()=>setEditable(true)}/>}

      </div>
    </div>
  );
}

export default Todo;
