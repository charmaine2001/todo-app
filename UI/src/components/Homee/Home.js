import TodoNavBar from '../TodoNavBar';
import { useNavigate } from 'react-router-dom';


function Homee(){

    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/todolist');
    };
    return(
        <div>
            <TodoNavBar/>
           <div className=" bg-blue-300 h-screen flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-6xl  mb-4 font-bold">
                    Lets get planning!
                </h1>
                <p className="text-lg font-extralight mb-8">
                    List all the things you want to do!

                </p>
                <button onClick = {handleGetStarted} className="bg-blue-950 hover:bg-blue-800 text-white font-bold py-2 px-2 rounded-full animate-bounce">
                    Get Started
                </button>

            </div>

        
        </div>
        </div>
        
    );
};

export default Homee;