
function TodoNavBar(){
    return(
        <nav className="bg-navy-blue py-4">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <h1 className="text-3xl text-white font bold">
                    Todo App
                </h1>
                <div className="flex items-center">
                    <input type="search" placeholder="Search" className="bg-gray-200 py-2 px-4 rounded-md text-gray-600 focus:outline-none focus:ring-blue-500"/>
                    <button className="ml-4 bg-gray-200 py-2 px-4 rounded-md text-gray-700 hover:bg-gray-200 focus:out focus:ring-2 focus:ring-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="002424" stroke="currentColor">
                            <path strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                    
                    
                </div>
            </div>

        </nav>
    );
};

export default TodoNavBar