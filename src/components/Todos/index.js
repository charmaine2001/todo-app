// import TodoForm from './TodoForm';
// import TodoList from './TodoList';
// import TodoNavBar from './TodoNavBar';
// import React, { useState } from 'react';

// const todos = [
//     {id: 1, message: 'Walk the dog'},
//     {id: 2, message: 'Cook dinner'},
//     {id: 3, message: 'Do your laundry'}
// ]

// function Todos() {
    

//     return (
//         <div>
//             <TodoNavBar/>
//             <TodoForm/>
//             <TodoList todos = {todos}/>
//         </div>
      
//     );
//   }
  
//   export default Todos;


// index.js
// import React, { useState } from 'react';
// import TodoList from './TodoList';
// import TodoNavBar from './TodoNavBar'; // Assuming you have a navigation bar component

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
//         <div className="max-w-md mx-auto p-4">
//             <TodoNavBar />
//             <h1 className="text-lg font-bold text-navy-gray mb-4">Todo List</h1>
//             <TodoList todos={todos} />
//             <form onSubmit={handleSubmit} className="flex flex-col">
//                 <input
//                     type="text"
//                     className="w-full p-2 mb-4 text-navy-gray"
//                     value={newTodo}
//                     onChange={(e) => setNewTodo(e.target.value)}
//                     placeholder="Add new task"
//                 />
//                 <button
//                     type="submit"
//                     className="bg-light-blue hover:bg-blue-100 text-gray-500 font-bold py-2 px-4 rounded"
//                 >
//                     <i className="fas fa-plus"></i> Add Task
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default Todos;

// // index.js
// import React, { useState } from 'react';
// import TodoList from './TodoList';
// import TodoNavBar from './TodoNavBar'; // Assuming you have a navigation bar component

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
//         <div className="h-screen w-full flex flex-col p-4 bg-gray-100">
//             <TodoNavBar />
//             <h1 className="text-lg font-bold text-navy-gray mb-4 text-center">Todo List</h1>
//             <TodoList todos={todos} />
//             <form onSubmit={handleSubmit} className="flex flex-col mb-4">
//                 <input
//                     type="text"
//                     className="w-full p-2 mb-4 text-navy-gray"
//                     value={newTodo}
//                     onChange={(e) => setNewTodo(e.target.value)}
//                     placeholder="Add new task"
//                 />
//                 <button
//                     type="submit"
//                     className="bg-light-blue hover:bg-blue-100 text-gray-500 font-bold py-2 px-4 rounded"
//                 >
//                     <i className="fas fa-plus"></i> Add Task
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default Todos;

// index.js (Todos.js)
import React, { useState } from 'react';
import TodoList from './TodoList';
// import TodoNavBar from '../TodoNavBar';
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
            <TodoList todos={todos} />
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default Todos;