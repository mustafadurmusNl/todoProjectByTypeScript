import React from 'react'
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaT } from 'react-icons/fa6';
function Todo() {
  return (
    <div>
  <div className='todo'>
    my first todo
    </div>
    <div className='todo'>
    <FaTrash />
    <FaEdit />
        </div>
    </div>
  )
}

export default Todo
