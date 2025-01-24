import TodoNavBar from '../TodoNavBar';

function TodoList() {
    
    return (
        <div className="h-screen w-full flex flex-col p-4 bg-gray-100">
            <TodoNavBar />
           <TodoList/>
        </div>
    );
};

export default TodoList; 
