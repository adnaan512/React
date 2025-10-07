import { configureStore } from "@reduxjs/toolkit";
import { addTodo } from "../features/todo/todoSlice";
import todoReducer from "../features/todo/todoSlice";
export const store=configureStore({
    reducer:todoReducer
})