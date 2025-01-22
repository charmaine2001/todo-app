import TodoNavBar from '../TodoNavBar';

function Help() {
    
    return (
        <div className="h-screen w-full flex flex-col p-4 bg-gray-100">
            <TodoNavBar />
           <Help/>
        </div>
    );
}

export default Help;