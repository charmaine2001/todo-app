
import React, { useState } from 'react';

function TodoForm({ addTodo, closeModal }) {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState(1);
  const [isLoading, setIsLoading] = useState(false); 
  const [message, setMessage] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskName.trim() !== '' && dueDate) {
      setIsLoading(true); 
      setMessage('');

      const newTodo = {
        title: taskName,
        dueDate: dueDate,
        priority: priority,
        completed: 0,
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

        const createdTodo = await response.json();
        addTodo(createdTodo); 

        setMessage('Task Added Successfully!'); 
        closeModal(); 
      } catch (error) {
        console.error('Error adding todo:', error);
        setMessage('Failed to add task. Please try again.'); 
      } finally {
        setIsLoading(false); 
      }
    } else {
      alert("Provide all required fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mb-4 bg-transparent">
      <input
        type="text"
        className="w-auto rounded-md bg-gray-200 p-2 mb-4 text-navy-blue"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name"
      />
      <input
        type="date"
        className="w-auto p-2  bg-gray-200 mb-4 text-navy-blue"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <label className="mb-2 font-semibold text-navy-gray">Priority:</label>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-auto rounded-md bg-gray-200 p-2 mb-4 text-navy-blue"
      >
        <option value={1}>1 - Low</option>
        <option value={2}>2 - Medium</option>
        <option value={3}>3 - High</option>
      </select>

      
      {isLoading ? (
        <div className="flex justify-center">
          <svg
            className="h-8 w-8 animate-spin text-blue-500"
            viewBox="3 3 18 18"
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
      ) : (
        <button
          type="submit"
          className="bg-light-blue hover:bg-blue-100 text-gray-500 font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      )}

      {message && (
        <p className="mt-4 text-center text-blue-500 font-semibold">{message}</p>
      )}
    </form>
  );
}

export default TodoForm;

