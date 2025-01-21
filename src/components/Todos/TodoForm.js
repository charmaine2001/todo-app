// import React, { useState } from 'react';

// function TodoForm(){
//     const [todo, setTodo] = useState({
//         message: ''
//     });


//     const handleChange = e => {
//         setTodo({message: e.target.value})
        
//     }

//     const handleSubmit = e => {
//         e.preventDefault()
//         console.log(todo)

//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <input
//               type='text'
//               name="todo"
//               value={todo.message}
//               placeholder="Enter todo item"
//               onChange={handleChange}
//             />
//             <button type="submit">
//                Add Todo
//             </button>
              
        
//         </form>
//     )
// };

// export default TodoForm;  



// // TodoForm.js
// import React from 'react';

// function TodoForm({ newTodo, setNewTodo, handleSubmit }) {
//     return (
//         <form onSubmit={handleSubmit} className="flex flex-col mb-4">
//             <input
//                 type="text"
//                 className="w-full p-2 mb-4 text-navy-gray"
//                 value={newTodo}
//                 onChange={(e) => setNewTodo(e.target.value)}
//                 placeholder="Add new task"
//             />
//             <button
//                 type="submit"
//                 className="bg-light-blue hover:bg-blue-100 text-gray-500 font-bold py-2 px-4 rounded"
//             >
//                 Add Task
//             </button>
//         </form>
//     );
// }

// export default TodoForm;


// TodoForm.js
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState(1); // Default priority

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() !== '' && dueDate) {
            const newTodo = {
                id: Date.now(),
                message: taskName,
                dueDate,
                priority,
            };
            addTodo(newTodo);
            setTaskName('');
            setDueDate('');
            setPriority(1); // Reset to default
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col mb-4">
            <input
                type="text"
                className="w-full p-2 mb-4 text-navy-gray"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task name"
            />
            <input
                type="date"
                className="w-full p-2 mb-4 text-navy-gray"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <label className="mb-2 text-navy-gray">Priority:</label>
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full p-2 mb-4 text-navy-gray"
            >
                <option value={1}>1 - Low</option>
                <option value={2}>2 - Medium</option>
                <option value={3}>3 - High</option>
            </select>
            <button
                type="submit"
                className="bg-light-blue hover:bg-blue-100 text-gray-500 font-bold py-2 px-4 rounded"
            >
                Add Task
            </button>
        </form>
    );
}

export default TodoForm;