import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import queryString from 'query-string';
import TodoListItems from './TodoListItems';
import FormInput from './FormInput';
import Pagination from './Pagination';
import FormSearch from './FormSearch';
import { default as todoListHelper } from './todo-list.helper';

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

async function getPosts(filter = {}) {
    const query = queryString.stringify(filter);
    const url = `https://jsonplaceholder.typicode.com/posts?${query}`;
    console.log('url', url);
    const res = await axios.get(url);
    const total = res.headers && res.headers['x-total-count'] ? res.headers['x-total-count'] : 0;
    const posts = res.data ? res.data : [];
    return { total, posts };
}

function TodoList(props) {
    const [todoList, setTodoList] = useState([]);
    const defaultTodoList = JSON.parse(localStorage.getItem('todoList')) || TODOS;
    const defaultFilter = {
        _page: 1,
        _limit: 10
    };

    const [filter, setFilter] = useState(defaultFilter);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        const { _limit } = filter;
        getPosts(filter).then(({ total, posts }) => {
            if (posts) {
                const numberPages = Math.ceil(total / _limit);
                setTodoList(posts);
                setTotalPage(numberPages);
            } else {
                setTodoList(defaultTodoList);
            }
        }).catch((error) => console.log('error', error));
    }, [filter]);

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

    function handleChangePages(pageNumber = 1) {
        setFilter({ ...filter, _page: pageNumber });
    }

    function handleFormSearch(text) {
        console.log('text', text);
    }

    return (
        <div>
            <h3>TodoList</h3>
            <FormSearch onSubmit={handleFormSearch} />
            <TodoListItems todos={todoList} handleOnClickToDoItem={handleOnClickToDoItem} />
            <FormInput onSubmit={handleAddTodo} />
            <Pagination totalPage={totalPage} changePages={handleChangePages} />
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
