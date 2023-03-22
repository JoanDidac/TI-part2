import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/Form';
import ToDo from './components/ToDo';
import './App.css';

function App() {
  const [ toDoList, setToDoList ] = useState([]);

  const handleToggle = (id) => {
    const updatedToDoList = toDoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setToDoList(updatedToDoList);
  };
 

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now(),
      task: event.target.elements.name.value,
      completed: false
    };
    setToDoList([...toDoList, newTask]);
    event.target.reset();
  };
 
 return (
   <div className="App">
     <Header />
     <ToDoList toDoList={toDoList} onToggle={handleToggle}/>
     <ToDoForm handleSubmit={handleSubmit} />
   </div>
 );
}

export default App;