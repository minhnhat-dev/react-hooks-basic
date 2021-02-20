import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

import Home from '../Home';
import ColorBox from '../ColorBox';
import TodoList from '../TodoList';
import Clock from '../Clock';

const routes = [
    {
        path: '/',
        component: Home,
        title: 'Home'
    },
    {
        path: '/color-box',
        component: ColorBox,
        title: 'Color Box'
    },
    {
        path: '/todo-list',
        component: TodoList,
        title: 'Todo List'
    },
    {
        path: '/clock',
        component: Clock,
        title: 'Clock'
    }
];

function Routes() {
    return (
        <Router>
            <div>
                <ul>
                    {routes.map((route, index) => (
                        <li key={index.toString()}>
                            <Link to={route.path}>{route.title}</Link>
                        </li>
                    ))}
                </ul>

                <hr />
                <Switch>
                    {routes.map((route, i) => (
                        <Route
                            exact
                            path={route.path}
                            key={i.toString()}
                            component={route.component}
                        />
                    ))}
                </Switch>
            </div>
        </Router>
    );
}

export default Routes;
