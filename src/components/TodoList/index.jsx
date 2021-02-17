import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoListItems from './TodoListItems';
import FormInput from './FormInput';

const TODOS = [
    {
        id: 1,
        title: 'Break first'
    },
    {
        id: 2,
        title: 'Learn Code'
    },
    {
        id: 3,
        title: 'Relax'
    }
];

function TodoList(props) {
    const defaultTodoList = JSON.parse(localStorage.getItem('todoList')) || TODOS;
    console.log('defaultTodoList', defaultTodoList);
    const [todoList, setTodoList] = useState(defaultTodoList);
    const [todoInput, setTodoInput] = useState('');

    function handleOnClickToDoItem(id) {
        const newTodoList = todoList.filter((item) => item.id !== id);
        setTodoList(newTodoList);
        localStorage.setItem('todoList', JSON.stringify(newTodoList));
    }

    function handleClear() {
        setTodoList(TODOS);
        localStorage.setItem('todoList', JSON.stringify(TODOS));
    }

    function handleAddTodo(todo) {
        if (todo) {
            const { title } = todo;
            const id = todoList.length + 1;
            const newTodoList = [...todoList, { id, title }];
            setTodoList(newTodoList);
            localStorage.setItem('todoList', JSON.stringify(newTodoList));
        }
    }

    return (
        <div>
            <h3>TodoList</h3>
            <TodoListItems todos={todoList} handleOnClickToDoItem={handleOnClickToDoItem} />
            <FormInput onSubmit={handleAddTodo} />
            <br />
            <button type="button" onClick={handleClear}>
                clear
            </button>
        </div>
    );
}

TodoList.propTypes = {

};

export default TodoList;
