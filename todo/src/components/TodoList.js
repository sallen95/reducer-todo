import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

    return (
        <div>
            <h1>Todo List!</h1>
            {props.data.map((item) => (
                <Todo key={item.id} item={item}/>
            ))}
            <button onClick={props.clearTasks}>
                Clear Completed Tasks
            </button>
        </div>
    )
}

export default TodoList;