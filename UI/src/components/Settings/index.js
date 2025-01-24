import TodoNavBar from '../TodoNavBar';

function Settings() {
    
    return (
        <div className="h-screen w-full flex flex-col p-4 bg-gray-100">
            <TodoNavBar />
           <Settings/>
        </div>
    );
}

export default Settings;