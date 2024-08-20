import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const {
        completedTodos,
        TotalTodos,
    } = React.useContext(TodoContext);
    return(
        <h1 className='TodoCounter'>
            Has completado <span>{completedTodos}</span> de <span>{TotalTodos}</span> TODOs
        </h1>
    );
}

export { TodoCounter };