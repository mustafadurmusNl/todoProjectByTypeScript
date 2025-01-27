import React from 'react'
import TodoList from './TodoList'


function TodoCreate() {
  return (
    <div className='todo-create'>
        <input type='text' placeholder='enter a todo' />
        <button>Create</button>
  <TodoList />
    </div>
  )
}

export default TodoCreate
