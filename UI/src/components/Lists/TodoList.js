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














// import React, { useState, useEffect } from 'react';
// import TodoForm from '../Todos/TodoForm';  // Make sure TodoForm is imported here

// const TodoList = ({ todos, setTodos }) => {
//     const [viewHistory, setViewHistory] = useState(false); // Toggle between active and historical todos
//     const [activeTodos, setActiveTodos] = useState([]);
//     const [historicalTodos, setHistoricalTodos] = useState([]);
//     const [showModal, setShowModal] = useState(false);  // State to control showing the modal

//     const todosList = todos || [];  // Default to empty array if todos is undefined

//     // Fetch historical todos when the button is clicked
//     const fetchHistoricalTodos = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/api/todos/history');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch historical todos');
//             }
//             const data = await response.json();
//             setHistoricalTodos(data);
//         } catch (error) {
//             console.error('Error fetching historical todos:', error);
//         }
//     };

//     // Filter out active todos
//     useEffect(() => {
//         if (todosList && todosList.length > 0) {
//             const active = todosList.filter((todo) => !todo.completed);  // Filter for incomplete todos
//             setActiveTodos(active);
//         }
//     }, [todosList]);

//     // Toggle between active and historical todos
//     const toggleHistory = () => {
//         setViewHistory(!viewHistory);
//         if (!viewHistory) {
//             fetchHistoricalTodos();  // Fetch historical todos if we're switching to that view
//         }
//     };

//     // Function to mark a todo as completed
//     const markAsCompleted = async (todoId) => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/todos/${todoId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ completed: 1 }),  // Mark todo as completed (1)
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to update todo status');
//             }

//             // Update UI immediately after backend update
//             setTodos((prevTodos) =>
//                 prevTodos.map((todo) =>
//                     todo.id === todoId ? { ...todo, completed: 1 } : todo
//                 )
//             );
//         } catch (error) {
//             console.error('Error marking todo as completed:', error);
//         }
//     };

//     // Handle opening and closing the modal
//     const openModal = () => {
//         setShowModal(true);
//     };

//     const closeModal = () => {
//         setShowModal(false);
//     };

//     return (
//         <div>
//             <h2>Your Todo List</h2>

//             {/* Button to toggle between active and historical todos */}
//             <button
//                 onClick={toggleHistory}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
//             >
//                 {viewHistory ? 'View Active Todos' : 'View History'}
//             </button>

//             {/* Button to open the modal */}
//             <button
//                 onClick={openModal}
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
//             >
//                 Add New Task
//             </button>

//             {/* Modal for adding new todo */}
//             {showModal && (
//                 <div className="modal-overlay">
//                     <div className="modal-content">
//                         <TodoForm setTodos={setTodos} closeModal={closeModal} />
//                     </div>
//                 </div>
//             )}

//             {/* Display either active todos or historical todos */}
//             <ul className="todo-list mt-4">
//                 {viewHistory ? (
//                     historicalTodos.length > 0 ? (
//                         historicalTodos.map((todo) => (
//                             <li key={todo.id} className="todo-item">
//                                 {todo.title} - {todo.dueDate} - {todo.priority}
//                             </li>
//                         ))
//                     ) : (
//                         <p>No historical todos available.</p>
//                     )
//                 ) : (
//                     activeTodos.length > 0 ? (
//                         activeTodos.map((todo) => (
//                             <li key={todo.id} className="todo-item">
//                                 <input
//                                     type="checkbox"
//                                     checked={todo.completed === 1}
//                                     onChange={() => markAsCompleted(todo.id)} // Toggle completion
//                                 />
//                                 {todo.title} - Due: {todo.dueDate} - Priority: {todo.priority}
//                             </li>
//                         ))
//                     ) : (
//                         <p>No active todos available.</p>
//                     )
//                 )}
//             </ul>
//         </div>
//     );
// };

// export default TodoList;



// import React, { useState, useEffect } from 'react';
// import Modal from './Modal'; 
// import TodoForm from '../Todos/TodoForm'; 

// const TodoList = ({todos, setTodos}) => {
//     const [viewHistory, setViewHistory] = useState(false); // Toggle between active and historical todos
//     const [activeTodos, setActiveTodos] = useState([]);
//     const [historicalTodos, setHistoricalTodos] = useState([]);
//     const [isModalOpen, setIsModalOpen] = useState(false); 
//     const todosList = todos || [];

//     // Fetch historical todos when the button is clicked
//     const fetchHistoricalTodos = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/api/todos/history');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch historical todos');
//             }
//             const data = await response.json();
//             setHistoricalTodos(data);
//         } catch (error) {
//             console.error('Error fetching historical todos:', error);
//         }
//     };

//     // Filter out active todos
//     useEffect(() => {
//         if (todosList && todosList.length > 0) {
//             const active = todosList.filter((todo) => !todo.completed);  // Filter for incomplete todos
//             setActiveTodos(active);
//         }
//     }, [todosList]);

//     // Toggle between active and historical todos
//     const toggleHistory = () => {
//         setViewHistory(!viewHistory);
//         if (!viewHistory) {
//             fetchHistoricalTodos();  // Fetch historical todos if we're switching to that view
//         }
//     };

//     // Function to mark a todo as completed
//     const markAsCompleted = async (todoId) => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/todos/${todoId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ completed: 1 }),  // Mark todo as completed (1)
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to update todo status');
//             }

//             // Update UI immediately after backend update
//             setTodos((prevTodos) =>
//                 prevTodos.map((todo) =>
//                     todo.id === todoId ? { ...todo, completed: 1 } : todo
//                 )
//             );
//         } catch (error) {
//             console.error('Error marking todo as completed:', error);
//         }
//     };


// //   useEffect(() => {
// //     fetch('http://localhost:3000/todos')
// //       .then((response) => response.json())
// //       .then((data) => setTodos(data))
// //       .catch((err) => console.error('Error fetching todos:', err));
// //   }, []);

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
//       <button
//           onClick={toggleHistory}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
//           {viewHistory ? 'View Active Todos' : 'View History'}
//       </button>

//       <ul className="todo-list mt-4">
//                 {viewHistory ? (
//                     historicalTodos.length > 0 ? (
//                         historicalTodos.map((todo) => (
//                             <li key={todo.id} className="todo-item">
//                                 {todo.title} - {todo.dueDate} - {todo.priority}
//                             </li>
//                         ))
//                     ) : (
//                         <p>No historical todos available.</p>
//                     )
//                 ) : (
//                     activeTodos.length > 0 ? (
//                         activeTodos.map((todo) => (
//                             <li key={todo.id} className="todo-item">
//                                 <input
//                                     type="checkbox"
//                                     checked={todo.completed === 1}
//                                     onChange={() => markAsCompleted(todo.id)} // Toggle completion
//                                 />
//                                 {todo.title} - Due: {todo.dueDate} - Priority: {todo.priority}
//                             </li>
//                         ))
//                     ) : (
//                         <p>No active todos available.</p>
//                     )
//                 )}
//             </ul>


//     </div>
//   );
// };

// export default TodoList;








// import React, { useState, useEffect } from 'react';
// import Modal from './Modal'; 
// import TodoForm from '../Todos/TodoForm'; 

// const TodoList = ({ todos = [], setTodos }) => { // Add default value to todos prop
//     const [viewHistory, setViewHistory] = useState(false); // Toggle between active and historical todos
//     const [activeTodos, setActiveTodos] = useState([]);
//     const [historicalTodos, setHistoricalTodos] = useState([]);
//     const [isModalOpen, setIsModalOpen] = useState(false); 
//     const todosList = todos;  // You don't need to set this to `todos || []` as `todos` already has a default empty array

//     // Fetch historical todos when the button is clicked
//     const fetchHistoricalTodos = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/api/todos/history');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch historical todos');
//             }
//             const data = await response.json();
//             setHistoricalTodos(data);
//         } catch (error) {
//             console.error('Error fetching historical todos:', error);
//         }
//     };

//     // Filter out active todos
//     useEffect(() => {
//         if (todosList && todosList.length > 0) {
//             const active = todosList.filter((todo) => !todo.completed);  // Filter for incomplete todos
//             setActiveTodos(active);
//         }
//     }, [todosList]);

//     // Toggle between active and historical todos
//     const toggleHistory = () => {
//         setViewHistory(!viewHistory);
//         if (!viewHistory) {
//             fetchHistoricalTodos();  // Fetch historical todos if we're switching to that view
//         }
//     };

//     // Function to mark a todo as completed
//     const markAsCompleted = async (todoId) => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/todos/${todoId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ completed: 1 }),  // Mark todo as completed (1)
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to update todo status');
//             }

//             // Update UI immediately after backend update
//             setTodos((prevTodos) =>
//                 prevTodos.map((todo) =>
//                     todo.id === todoId ? { ...todo, completed: 1 } : todo
//                 )
//             );
//         } catch (error) {
//             console.error('Error marking todo as completed:', error);
//         }
//     };

//     // Add new todo to the list
//     const addTodoToList = (newTodo) => {
//         setTodos((prevTodos) => [...prevTodos, newTodo]);
//     };

//     // Handle opening and closing the modal
//     const handleAddTaskClick = () => {
//         setIsModalOpen(true); 
//     };

//     const closeModal = () => {
//         setIsModalOpen(false); 
//     };

//     return (
//         <div>
//             <h2 className="font-bold text-3xl text-navy-gray">Your Todo List</h2>
            
//             {/* Display todos list */}
//             <ul>
//                 {todosList.map((todo) => (
//                     <li key={todo.id}> {todo.title} - Due: {todo.dueDate} - Priority: {todo.priority} </li>
//                 ))}
//             </ul>

//             {/* Modal for adding new todo */}
//             <Modal isOpen={isModalOpen} onClose={closeModal}>
//                 <TodoForm addTodo={addTodoToList} closeModal={closeModal} />
//             </Modal>

//             {/* Button to open modal */}
//             <div
//                 onClick={handleAddTaskClick}
//                 className="fixed bottom-8 right-8 cursor-pointer p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
//             >
//                 <svg
//                     className="h-16 w-16 text-blue-700 animate-bounce hover:to-blue-950"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 >
//                     <circle cx="12" cy="12" r="10" />
//                     <line x1="12" y1="8" x2="12" y2="16" />
//                     <line x1="8" y1="12" x2="16" y2="12" />
//                 </svg>
//             </div>

//             {/* Button to toggle between active and historical todos */}
//             <button
//                 onClick={toggleHistory}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
//             >
//                 {viewHistory ? 'View Active Todos' : 'View History'}
//             </button>

//             {/* Display either active or historical todos */}
//             <ul className="todo-list mt-4">
//                 {viewHistory ? (
//                     historicalTodos.length > 0 ? (
//                         historicalTodos.map((todo) => (
//                             <li key={todo.id} className="todo-item">
//                                 {todo.title} - {todo.dueDate} - {todo.priority}
//                             </li>
//                         ))
//                     ) : (
//                         <p>No historical todos available.</p>
//                     )
//                 ) : (
//                     activeTodos.length > 0 ? (
//                         activeTodos.map((todo) => (
//                             <li key={todo.id} className="todo-item">
//                                 <input
//                                     type="checkbox"
//                                     checked={todo.completed === 1}
//                                     onChange={() => markAsCompleted(todo.id)} // Toggle completion
//                                 />
//                                 {todo.title} - Due: {todo.dueDate} - Priority: {todo.priority}
//                             </li>
//                         ))
//                     ) : (
//                         <p>No active todos available.</p>
//                     )
//                 )}
//             </ul>
//         </div>
//     );
// };

// export default TodoList;








import React, { useState, useEffect } from 'react';
import Modal from './Modal'; 
import TodoForm from '../Todos/TodoForm';

const TodoList = ({ todos = [], setTodos }) => { // Ensure setTodos is passed as a prop
    const [viewHistory, setViewHistory] = useState(false); // Toggle between active and historical todos
    const [activeTodos, setActiveTodos] = useState([]);
    const [historicalTodos, setHistoricalTodos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const todosList = todos;  // You don't need to set this to `todos || []` as `todos` already has a default empty array

    // Fetch historical todos when the button is clicked
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

    // Filter out active todos
    useEffect(() => {
        if (todosList && todosList.length > 0) {
            const active = todosList.filter((todo) => !todo.completed);  // Filter for incomplete todos
            setActiveTodos(active);
        }
    }, [todosList]);

    // Toggle between active and historical todos
    const toggleHistory = () => {
        setViewHistory(!viewHistory);
        if (!viewHistory) {
            fetchHistoricalTodos();  // Fetch historical todos if we're switching to that view
        }
    };

    // Function to mark a todo as completed
    const markAsCompleted = async (todoId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/todos/${todoId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ completed: 1 }),  // Mark todo as completed (1)
            });

            if (!response.ok) {
                throw new Error('Failed to update todo status');
            }

            // Update UI immediately after backend update
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === todoId ? { ...todo, completed: 1 } : todo
                )
            );
        } catch (error) {
            console.error('Error marking todo as completed:', error);
        }
    };

    // Add new todo to the list
    const addTodoToList = (newTodo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    // Handle opening and closing the modal
    const handleAddTaskClick = () => {
        setIsModalOpen(true); 
    };

    const closeModal = () => {
        setIsModalOpen(false); 
    };

    return (
        <div>
            <h2 className="font-bold text-3xl text-navy-gray">Your Todo List</h2>
            
            {/* Display todos list */}
            <ul>
                {todosList.map((todo) => (
                    <li key={todo.id}> {todo.title} - Due: {todo.dueDate} - Priority: {todo.priority} </li>
                ))}
            </ul>

            {/* Modal for adding new todo */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <TodoForm addTodo={addTodoToList} closeModal={closeModal} />
            </Modal>

            {/* Button to open modal */}
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

            {/* Button to toggle between active and historical todos */}
            <button
                onClick={toggleHistory}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                {viewHistory ? 'View Active Todos' : 'View History'}
            </button>

            {/* Display either active or historical todos */}
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
                                    onChange={() => markAsCompleted(todo.id)} // Toggle completion
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

