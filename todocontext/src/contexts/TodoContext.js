import { createContext, useContext } from "react";
import React from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "memem",
            completed: false
        },
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}  // ← Changed from toggleCompleted to toggleComplete
})

export const UseTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider