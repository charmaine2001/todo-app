
// import React, { useState, useEffect } from 'react';
// import TodoNavBar from '../TodoNavBar';
// import TodoForm from './TodoForm';
// import TodoList from '../Lists/TodoList';

// function Todos() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         const fetchTodos = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/todos');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setTodos(data); 
//             } catch (error) {
//                 console.error('Error fetching todos:', error);
//             }
//         };

//         fetchTodos();
//     }, []); 

    
//     const addTodo = (newTodo) => {
//         setTodos((prevTodos) => [...prevTodos, newTodo]); 
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
import TodoList from '../Lists/TodoList';

function Todos() {
    const [todos, setTodos] = useState([]);  // Declare state for todos

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/todos');
                if (!response.ok) {
                    throw new Error('Failed to fetch todos');
                }
                const data = await response.json();
                setTodos(data);  // Set the todos fetched from the API
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    return (
        <div>
            <TodoNavBar />
            <TodoList todos={todos} setTodos={setTodos} />  {/* Pass setTodos down to TodoList */}
        </div>
    );
}

export default Todos;

