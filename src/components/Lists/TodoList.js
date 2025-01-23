// import Todo from './Todo';
// import TodoNavBar from '../TodoNavBar';
// import { useNavigate } from 'react-router-dom';

// function TodoList({ todos }) {

//     const navigate = useNavigate();

//     const handleAddTask = () => {
//         navigate('/Todos');
//     };

//     return (
//         <div>
//             {todos.length === 0 ? (
//                 <div className="w-full p-4 text-center text-navy-gray">
//                     <button onClick = {handleAddTask} className="bg-light-blue hover:bg-blue-100 text-gray-500 font-bold py-2 px-4 rounded">
//                         Add your new task
//                     </button>
//                 </div>
//             ) : (
//                 todos.map(todo => (
//                     <Todo key={todo.id} todo={todo} />
//                 ))
//             )}
//         </div>
//     );
// };

// export default TodoList;


import React from 'react';

function TodoList({ todos }) {
    return (
        <div className="mt-4">
            <h2 className="text-lg font-semibold">Your Todos</h2>
            <ul className="list-disc pl-5">
                {todos.map((todo, index) => (
                    <li key={index} className="mb-2">
                        <span className="font-bold">{todo.title}</span>
                        <span className="ml-2">- Due: {todo.dueDate}</span>
                        <span className="ml-2">- Priority: {todo.priority}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;