
import React, { useState, useEffect } from 'react';
import TodoNavBar from '../TodoNavBar';
import TodoList from '../Lists/TodoList';

function Todos() {
    const [todos, setTodos] = useState([]);  

    

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/todos');
                if (!response.ok) {
                    throw new Error('Failed to fetch todos');
                }
                const data = await response.json();
                setTodos(data);  
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    return (
        <div>
            <TodoNavBar />
            <TodoList todos={todos} setTodos={setTodos} />  
        </div>
    );
}

export default Todos;

