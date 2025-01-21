// import Todo from './Todo';

// function TodoList({todos

// }){
//     return (
//         <div>
//             {todos.map(todo => {
//                 return <Todo key={todo.id} todo={todo}/>
//             })}
//         </div>
//     )
// };

// export default TodoList;



// TodoList.js
import Todo from './Todo';

function TodoList({ todos }) {
    return (
        <div>
            {todos.length === 0 ? (
                <div className="w-full p-4 text-center text-navy-gray">
                    <button className="bg-light-blue hover:bg-blue-100 text-gray-500 font-bold py-2 px-4 rounded">
                        Add your new task
                    </button>
                </div>
            ) : (
                todos.map(todo => (
                    <Todo key={todo.id} todo={todo} />
                ))
            )}
        </div>
    );
}

export default TodoList;