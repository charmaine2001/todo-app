import TodoNavBar from '../TodoNavBar';
import { useNavigate } from 'react-router-dom';


function Homee(){

    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/Todos');
    };
    return(
        <div>
            <TodoNavBar/>
           <div className=" bg-blue-100 h-screen flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-10xl mb-4">
                    Lets get planning!
                </h1>
                <p className="text-1g mb-8">
                    List all the things you want to do.

                </p>
                <button onClick = {handleGetStarted} className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 rounded">
                    Get Started
                </button>

            </div>

        
        </div>
        </div>
        
    );
};

export default Homee;