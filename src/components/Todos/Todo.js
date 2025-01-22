
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


import React, { useState } from 'react';
import TodoNavBar from '../TodoNavBar';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useNavigate } from 'react-router-dom';



function Todos() {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    const addTodo = (newTodo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        navigate('/todolist'); // Navigate to TodoList after adding
    };

    return (
        <div>
            <TodoNavBar />
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    );
}

export default Todos;















