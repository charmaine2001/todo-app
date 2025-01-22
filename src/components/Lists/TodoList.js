import Todo from './Todo';
import TodoNavBar from '../TodoNavBar';
import { useNavigate } from 'react-router-dom';

function TodoList({ todos }) {

    const navigate = useNavigate();

    const handleAddTask = () => {
        navigate('/Todos');
    };

    return (
        <div>
            {todos.length === 0 ? (
                <div className="w-full p-4 text-center text-navy-gray">
                    <button onClick = {handleAddTask} className="bg-light-blue hover:bg-blue-100 text-gray-500 font-bold py-2 px-4 rounded">
                        Add your new task
                    </button>
                </div>
            ) : (
                todos.map(todo => (
                    <Todo key={todo.id} todo={todo} />
                ))
            )}
        </div>
    );
};

export default TodoList;