
import './App.css';
import Homee from './components/Homee/Home'; 
import Todos from './components/Todos'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Lists';
import Help from './components/Help';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/Todos" element={<Todos />} />
          <Route path="/add-todo" element={<TodoForm />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/" element={<Todos />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/help" element={<Help />} />
          <Route path="/settings" element={<Settings />} /> 
          <Route path="/Lists" element={<Todos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;