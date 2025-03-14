import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from '../types/Types'

const initialState: TodoInitialState = {
todos: [    
    {id: 1, content: 'First default todo is Learn React'},
  
]
    }

    export const todoSlice = createSlice({
            name: 'todo',
            initialState,
            reducers: {
createTodo: (state:TodoInitialState, action: PayloadAction<TodoType>) => {
    state.todos=[...state.todos, action.payload]

            },
 removeTodoById: (state: TodoInitialState, action: PayloadAction<number>) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload)

 },
 updateTodoById: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
    state.todos = state.todos.map((todo) =>
      todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
    );
  }
  
}
    })
      


   export const { createTodo,removeTodoById,updateTodoById} = todoSlice.actions
   export default todoSlice.reducer