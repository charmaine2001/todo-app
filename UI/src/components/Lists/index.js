import TodoNavBar from '../TodoNavBar';
import TodoList from './TodoList';

function Lists() {
    
    return (
        <div className="h-screen w-full flex flex-col p-4 bg-gray-100">
            <TodoNavBar />
           <TodoList/>
        </div>
    );
};

export default Lists; 
