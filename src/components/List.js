import React, {Component, Fragment} from 'react';
import '../stylesheets/App.css';
// import { Link } from 'react-router-dom'
import { Router, Route } from 'react-router'
import Registration from './Registration';
import Login from './Login';

class List extends React.Component {
    render() {
        return (
            <Router>
                <p>Hello world</p>
                <Route path="/" component={ App }>
                
                    <Route path="Registration" component={ Registration }/>
                    <Route path="Login" component={ Login }/>
                </Route>  
            </Router>
        );
    }
}

export default List;