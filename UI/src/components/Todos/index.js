
// import React, { useState } from 'react';
// import TodoForm from './TodoForm';
// import TodoNavBar from '../TodoNavBar';

// function Todos() {
//     const [todos, setTodos] = useState([]);

//     const addTodo = (newTodo) => {
//         setTodos((prevTodos) => [...prevTodos, newTodo]);
//     };

//     return (
//         <div className="h-screen w-full flex flex-col p-4 bg-gray-100">
//             <TodoNavBar />
//             <h1 className="text-lg font-bold text-navy-gray mb-4 text-center">Todo List</h1>
//             <TodoForm addTodo={addTodo} />
//         </div>
//     );
// }

// export default Todos;

import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoNavBar from '../TodoNavBar';
import Todo from './Todo'; // Import the TodoItem component

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
            <div className="mt-4">
                {todos.length === 0 ? (
                    <p className="text-center">No todos available</p>
                ) : (
                    todos.map((todo, index) => (
                        <Todo key={index} todo={todo} /> // Render each TodoItem
                    ))
                )}
            </div>
        </div>
    );
}

export default Todos;