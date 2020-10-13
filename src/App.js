import React, {useEffect, useState} from 'react';
import './App.css';

//import components
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
  //state stuffs
  const [inputtext, setInputtext] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setstatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);
  
  //run once when app starts
  useEffect(() => {
    getlocaltodos();
  }, [])

  //use effects
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])
  
  //functions
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setfilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setfilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  }

  //Slocal storage
  const  saveLocalTodos = () =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getlocaltodos = () =>{
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      let localtodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localtodos);
    }
  } 

  return (
    <>
      <header>
      <h1>To-Do List</h1>
      </header>
      <Form setInputtext={setInputtext} inputtext={inputtext} todos={todos} setTodos={setTodos} setstatus={setstatus}/>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos= {filteredTodos}/>
    </>
  );
}

export default App;