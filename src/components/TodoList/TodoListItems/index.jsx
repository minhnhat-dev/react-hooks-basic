import React from 'react';
import PropTypes from 'prop-types';
import './TodoListItems.scss';

TodoListItems.propTypes = {
    todos: PropTypes.array,
    handleOnClickToDoItem: PropTypes.func
};

TodoListItems.defaultProps = {
    todos: [],
    handleOnClickToDoItem: null
};

function TodoListItems({ todos = [], handleOnClickToDoItem }) {
    function handleClick(id) {
        handleOnClickToDoItem(id);
    }

    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li
                        className="title"
                        key={todo.id.toString()}
                        onClick={() => handleClick(todo.id)}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoListItems;
