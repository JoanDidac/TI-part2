import React from 'react';
 
const ToDo = ({todo, onToggle}) => {
   return (
       <div className='to-do'>
           <input
             type="checkbox"
             checked={todo.completed}
             onChange={() => onToggle(todo.id)}
           />
           <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
             {todo.task}
           </span>
       </div>
   );
};
 
export default ToDo;
