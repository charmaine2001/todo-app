
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TodoNavBar() {
    const [isToolbarVisible, setToolbarVisible] = useState(false);
    const navigate = useNavigate(); 

    const handleMenuClick = () => {
        setToolbarVisible((prev) => !prev); 
    };

    const handleHelpClick = () => {
        navigate('/Help'); 
    };

    const handleSettingsClick = () => {
        navigate('/Settings'); 
    };

    return (
        <nav className="bg-navy-blue py-4">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <h1 className="text-5xl text-white font-bold">
                    Todo App
                </h1>
                <div className="flex items-center">
                    <input
                        type="search"
                        placeholder="Search"
                        className="bg-gray-200 py-2 px-4 rounded-md text-gray-600 focus:outline-none focus:ring-blue-500"
                    />
                    <button
                        className="ml-4 bg-gray-200 py-2 px-4 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={handleMenuClick} // Add click handler here
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    
                    {isToolbarVisible && (
                        <div className="absolute top-16 right-4 bg-slate-400 border border-gray-300 shadow-lg rounded-md p-2">
                            <button
                                onClick={handleHelpClick}
                                className="block w-full text-left py-2 rounded px-4 text-gray-950 font-semibold bg-slate-400 hover:bg-gray-200"
                            >
                                Help
                            </button>
                            <button
                                onClick={handleSettingsClick}
                                className="block w-full text-left  py-2 rounded px-4 text-gray-950 font-semibold  bg-slate-400 hover:bg-gray-200"
                            >
                                Settings
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default TodoNavBar;