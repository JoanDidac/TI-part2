import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Form from './components/Form';
import './App.css';

function App() {
  // const [ toDoList, setToDoList ] = useState();
 
 
 return (
   <div className="App">
     <Header />
     <ToDoList toDoList={ToDoList}/>
     <Form>
      What Tha Fuck?!
     </Form>
   </div>
 );
}

export default App;





 

