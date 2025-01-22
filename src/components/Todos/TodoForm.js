
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function TodoForm({ addTodo }) {
//     const [taskName, setTaskName] = useState('');
//     const [dueDate, setDueDate] = useState('');
//     const [priority, setPriority] = useState(1);
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (taskName.trim() !== '' && dueDate) {
//             const newTodo = {
//                 id: Date.now(),
//                 message: taskName,
//                 dueDate,
//                 priority,
//             };
//             addTodo(newTodo);
//             setTaskName('');
//             setDueDate('');
//             setPriority(1); 
//         }
//         // console.log('Task added:',task);
//         navigate('/TodoList')
//     };

//     return (
//         <form onSubmit={handleSubmit} className="flex flex-col mb-4">
//             <input
//                 type="text"
//                 className="w-full p-2 mb-4 text-navy-gray"
//                 value={taskName}
//                 onChange={(e) => setTaskName(e.target.value)}
//                 placeholder="Task name"
//             />
//             <input
//                 type="date"
//                 className="w-full p-2 mb-4 text-navy-gray"
//                 value={dueDate}
//                 onChange={(e) => setDueDate(e.target.value)}
//             />
//             <label className="mb-2 text-navy-gray">Priority:</label>
//             <select
//                 value={priority}
//                 onChange={(e) => setPriority(e.target.value)}
//                 className="w-full p-2 mb-4 text-navy-gray"
//             >
//                 <option value={1}>1 - Low</option>
//                 <option value={2}>2 - Medium</option>
//                 <option value={3}>3 - High</option>
//             </select>
//             <button
//                 type="submit"
//                 className="bg-light-blue hover:bg-blue-100 text-gray-500 font-bold py-2 px-4 rounded"
//             >
//                 Add Task
//             </button>
//         </form>
//     );
// };

// export default TodoForm;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TodoForm() {
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (taskName.trim() !== '' && dueDate) {
            const newTodo = {
                title: taskName,
                dueDate: dueDate,
                priority: priority,
                completed: false,
            };
    
            try {
                const response = await fetch('http://localhost:5000/api/todos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newTodo),
                });
    
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
    
                const data = await response.json();
                console.log('Todo added:', data);
                alert('Todo added successfully!'); // Add this line
                setTaskName('');
                setDueDate('');
                setPriority(1);
                navigate('/TodoList');
            } catch (error) {
                console.error('Error adding todo:', error);
            }
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





