import React from "react"
import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseListComponent from "./CourseListComponent";
import CourseEditorComponent from "./CourseEditor/CourseEditorComponent";

export default class CourseManagerComponent extends React.Component {

    state = {
        courses: [],
    }

    render () {
        return (
            <BrowserRouter>
                <div className="container">
                    <Route path="/" exact>
                        <CourseListComponent courses={this.state.courses}/></Route>
                    <Route path="/edit/:courseId"
                           exact
                           component={CourseEditorComponent}/>
                </div>
            </BrowserRouter>
        );
    }


}