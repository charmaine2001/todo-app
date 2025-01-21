import TodoNavBar from '../TodoNavBar';

function Home() {
    
    return (
        <div className="h-screen w-full flex flex-col p-4 bg-gray-100">
            <TodoNavBar />
           <Home/>
        </div>
    );
}

export default Home;