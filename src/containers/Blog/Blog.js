import React, { Component } from 'react';
import './Blog.css';
// import axios from 'axios';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';

const asyncNewpost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                    to="/" 
                                    exact
                                    activeClassName="my-active">POSTS</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>NEW POST</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*
                <Route path="/" exact render={() => <h1>Home</h1>} />
                */}
                
                <Switch>
                    {this.state.auth ? <Route path='/new-post' exact component={asyncNewpost} /> : null}
                    <Route path='/posts' component={Posts} />
                    <Route render={() => <h1>NOT FOUND</h1>} />
                    {/* <Redirect from='/' to='/posts' /> */}
                    {/* <Route path='/' component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;