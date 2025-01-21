

// function Todo(props){
//     return(
//         <div>
//            {props.todo.message}
//         </div>
//     )
// }

// export default Todo;


// Todos.js
import React, { useState } from 'react';
import TodoNavBar from '../TodoNavBar';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todos() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim() !== '') {
            const newTodoObj = { id: Date.now(), message: newTodo };
            setTodos([...todos, newTodoObj]);
            setNewTodo('');
        }
    };

    return (
        <div>
            <TodoNavBar />
            <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} handleSubmit={handleSubmit} />
            <TodoList todos={todos} />
        </div>
    );
}

export default Todos;
