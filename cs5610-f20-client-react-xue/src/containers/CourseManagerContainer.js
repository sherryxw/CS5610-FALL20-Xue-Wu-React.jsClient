import React from "react"
import {BrowserRouter, Link, Route} from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/Profile";
import CourseListComponent from "../components/CourseListComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";

export default class CourseManagerContainer extends React.Component {

    state = {
        courses: [],
    }

    render () {
        return (
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
                        <CourseListComponent courses={this.state.courses}/>
                    </Route>
                    <Route path="/grid" exact>
                        <CourseGridComponent instructor="Xue"/>
                    </Route>
                    <Route path="/edit/:courseId"
                           exact
                           component={CourseEditorComponent}/>
                </div>
            </BrowserRouter>
        );
    }


}