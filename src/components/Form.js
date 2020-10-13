import React from 'react';

const Form = ({setInputtext, setTodos, todos, inputtext, setstatus}) => {
    const inputTextHandler = (e) => {
        setInputtext(e.target.value);
    }
    const submitToDo = (e) => {
        e.preventDefault();

        if(inputtext.length !== 0){
            setTodos([
                ...todos, {text: inputtext, completed: false, id: Math.random()*1000}
            ]);
            setInputtext("");
        }else{
            alert("Enter something, duh!");
        }
    }
    const statusHandler = (e) => {
        setstatus(e.target.value);
    }

    return(
        <form>
            <input value={inputtext} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitToDo} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;