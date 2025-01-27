// import React, { useState, useEffect } from 'react';
// import Modal from './Modal'; 
// import TodoForm from '../Todos/TodoForm'; 

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false); 


//   useEffect(() => {
//     fetch('http://localhost:3000/todos')
//       .then((response) => response.json())
//       .then((data) => setTodos(data))
//       .catch((err) => console.error('Error fetching todos:', err));
//   }, []);

//   const addTodoToList = (newTodo) => {
//     setTodos((prevTodos) => [...prevTodos, newTodo]);
//   };

//   const handleAddTaskClick = () => {
//     setIsModalOpen(true); 
//   };

//   const closeModal = () => {
//     setIsModalOpen(false); 
//   };

//   return (
//     <div>
//       <h2 className="font-bold text-3xl text-navy-gray">Your Todo List</h2>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}> {todo.title} - Due: {todo.dueDate} - Priority: {todo.priority}
//           </li>
//         ))}
//       </ul>

//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <TodoForm addTodo={addTodoToList} closeModal={closeModal} />
//       </Modal>
//       <div
//         onClick={handleAddTaskClick}
//         className="fixed bottom-8 right-8 cursor-pointer p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
//       >
//         <svg
//           className="h-16 w-16 text-blue-700 animate-bounce hover:to-blue-950"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <circle cx="12" cy="12" r="10" />
//           <line x1="12" y1="8" x2="12" y2="16" />
//           <line x1="8" y1="12" x2="16" y2="12" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default TodoList;

import React, { useState, useEffect } from 'react';
import Modal from './Modal'; 
import TodoForm from '../Todos/TodoForm';

const TodoList = ({ todos = [], setTodos }) => { 
    const [viewHistory, setViewHistory] = useState(false); 
    const [activeTodos, setActiveTodos] = useState([]);
    const [historicalTodos, setHistoricalTodos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const todosList = todos;  

    
    const fetchHistoricalTodos = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/todos/history');
            if (!response.ok) {
                throw new Error('Failed to fetch historical todos');
            }
            const data = await response.json();
            setHistoricalTodos(data);
        } catch (error) {
            console.error('Error fetching historical todos:', error);
        }
    };

    
    useEffect(() => {
        if (todosList && todosList.length > 0) {
            const active = todosList.filter((todo) => !todo.completed); 
            setActiveTodos(active);
        }
    }, [todosList]);

    const toggleHistory = () => {
        setViewHistory(!viewHistory);
        if (!viewHistory) {
            fetchHistoricalTodos();  
        }
    };

    
    const markAsCompleted = async (todoId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/todos/${todoId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ completed: 1 }),  
            });

            if (!response.ok) {
                throw new Error('Failed to update todo status');
            }

           
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === todoId ? { ...todo, completed: 1 } : todo
                )
            );
        } catch (error) {
            console.error('Error marking todo as completed:', error);
        }
    };

    
    const addTodoToList = (newTodo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    
    const handleAddTaskClick = () => {
        setIsModalOpen(true); 
    };

    const closeModal = () => {
        setIsModalOpen(false); 
    };

    return (
        <div>
            <h2 className="font-bold text-3xl text-navy-gray">Your Todo List</h2>
            
            
            <ul>
                {todosList.map((todo) => (
                    <li key={todo.id}> {todo.title} - Due: {todo.dueDate} - Priority: {todo.priority} </li>
                ))}
            </ul>

            
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <TodoForm addTodo={addTodoToList} closeModal={closeModal} />
            </Modal>

            
            <div
                onClick={handleAddTaskClick}
                className="fixed bottom-8 right-8 cursor-pointer p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
            >
                <svg
                    className="h-16 w-16 text-blue-700 animate-bounce hover:to-blue-950"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
            </div>

            
            <button
                onClick={toggleHistory}
                className="bg-blue-800 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-full mb-4"
            >
                {viewHistory ? 'View Active Todos' : 'View History'}
            </button>

            
            <ul className="todo-list mt-4">
                {viewHistory ? (
                    historicalTodos.length > 0 ? (
                        historicalTodos.map((todo) => (
                            <li key={todo.id} className="todo-item">
                                {todo.title} - {todo.dueDate} - {todo.priority}
                            </li>
                        ))
                    ) : (
                        <p>No historical todos available.</p>
                    )
                ) : (
                    activeTodos.length > 0 ? (
                        activeTodos.map((todo) => (
                            <li key={todo.id} className="todo-item">
                                <input
                                    type="checkbox"
                                    checked={todo.completed === 1}
                                    onChange={() => markAsCompleted(todo.id)} 
                                />
                                {todo.title} - Due: {todo.dueDate} - Priority: {todo.priority}
                            </li>
                        ))
                    ) : (
                        <p>No active todos available.</p>
                    )
                )}
            </ul>
        </div>
    );
};

export default TodoList;

