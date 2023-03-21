import React from 'react';
 
const ToDo = ({todo}) => {
   return (
       <div className='to-do'>
           {todo.task}
       </div>
   );
};
 
export default ToDo;
