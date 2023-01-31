import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Form from './components/Form';
import TodoList from './components/TodoList';
import React, { useState, useEffect } from 'react';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/todos');
      const json = await res.json();
      setTodos(json);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'pending':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos)
          break;
      }
    };
    filterHandler();

  }, [todos, status]);



  return (
    <div className="App">
      <h1 className='text-center m-4'>React Todo</h1>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <TodoList setTodos={setTodos} todos={todos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
