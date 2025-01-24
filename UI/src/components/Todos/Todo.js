
import React, { useState, useEffect } from 'react';
import TodoNavBar from '../TodoNavBar';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useNavigate } from 'react-router-dom';

function Todos() {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/todos');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTodos(data); 
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    const addTodo = (newTodo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        navigate('/Lists'); 
    };

    return (
        <div>
            <TodoNavBar />
            <TodoForm addTodo={addTodo} navigate={navigate} />
            <TodoList todos={todos} />
        </div>
    );
}

export default Todos;















