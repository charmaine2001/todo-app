
// import React, { useState } from 'react';
// import TodoNavBar from '../TodoNavBar';
// import TodoForm from './TodoForm';
// import TodoList from './TodoList';
// import { useNavigate } from 'react-router-dom';

// function Todos() {
//     const [todos, setTodos] = useState([]);
//     const [newTodo, setNewTodo] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (newTodo.trim() !== '') {
//             const newTodoObj = { id: Date.now(), message: newTodo };
//             setTodos([...todos, newTodoObj]);
//             setNewTodo('');
//         }
//     };

//     return (
//         <div>
//             <TodoNavBar />
//             <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} handleSubmit={handleSubmit} />
//             <TodoList todos={todos} />
//         </div>
//     );
// }

// export default Todos;


// import React, { useState } from 'react';
// import TodoNavBar from '../TodoNavBar';
// import TodoForm from './TodoForm';
// import TodoList from './TodoList';
// import { useNavigate } from 'react-router-dom';



// function Todos() {
//     const [todos, setTodos] = useState([]);
//     const navigate = useNavigate();

//     const addTodo = (newTodo) => {
//         setTodos((prevTodos) => [...prevTodos, newTodo]);
//         navigate('/todolist'); // Navigate to TodoList after adding
//     };

//     return (
//         <div>
//             <TodoNavBar />
//             <TodoForm addTodo={addTodo} />
//             <TodoList todos={todos} />
//         </div>
//     );
// }

// export default Todos;


import React, { useState, useEffect } from 'react';
import TodoNavBar from '../TodoNavBar';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useNavigate } from 'react-router-dom';

function Todos() {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    // Fetch todos from the backend when the component mounts
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/todos');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTodos(data); // Assume the response is an array of todos
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    const addTodo = (newTodo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        navigate('/todolist'); // Navigate to TodoList immediately
    };

    return (
        <div>
            <TodoNavBar />
            <TodoForm addTodo={addTodo} navigate={navigate} />
            <TodoList todos={todos} />
        </div>
    );
}

export default Todos;















