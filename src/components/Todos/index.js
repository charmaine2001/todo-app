
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoNavBar from '../TodoNavBar';

function Todos() {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    return (
        <div className="h-screen w-full flex flex-col p-4 bg-gray-100">
            <TodoNavBar />
            <h1 className="text-lg font-bold text-navy-gray mb-4 text-center">Todo List</h1>
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default Todos;