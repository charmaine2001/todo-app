import TodoNavBar from '../TodoNavBar';

function Home(){
    return(
        <div className="h-screen flex justify-center items-center">
            <TodoNavBar/>
            <div className="text-center">
                <h1 className="texr-5xl mb-4">
                    Lets get planning!
                </h1>
                <p className="text-1g mb-8">
                    List all the things you want to do.

                </p>
                <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 rounded">
                    Get Started
                </button>

            </div>

        
        </div>
    );
};

export default Home;