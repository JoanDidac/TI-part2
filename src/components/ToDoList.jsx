import React from 'react';
import ToDo from './ToDo';
 
const ToDoList = ({toDoList, onToggle}) => {
   return (
       <div className='list'>
           {toDoList.map(todo => {
               return (
                   <ToDo key={todo.id} todo={todo} onToggle={onToggle} />
               )
           })}
       </div>
   );
};
 
export default ToDoList;
