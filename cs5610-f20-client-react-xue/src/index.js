import React from 'react';
import ReactDOM from 'react-dom';
//import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.css"
import {BrowserRouter, Route, Link} from "react-router-dom";
import App from './App';
import CourseListComponent from "./components/CourseListComponent";
import * as serviceWorker from './serviceWorker';
import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import CourseEditorComponent from "./components/CourseEditorComponent";
import CourseGridComponent from "./components/CourseGridComponent";


ReactDOM.render(
    <BrowserRouter>
        <div className="container">
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/CourseListComponent">CourseListComponent</Link>
            <Link to="/edit">Editor</Link>
                <Route path="/Login" exact component={Login}/>
                <Route path="/Register" exact component={Register}/>
                <Route path="/Profile" exact component={Profile}/>
                <Route path="/CourseListComponent" exact>
                    <CourseListComponent instructor="Xue"/>
                </Route>
                <Route path="/grid" exact>
                    <CourseGridComponent instructor="Xue"/>
                </Route>
                <Route path="/edit/:courseId"
                       exact
                       component={CourseEditorComponent}/>


        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
