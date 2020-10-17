import React from "react"
import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseEditorComponent from "./CourseEditor/CourseEditorComponent";
import {createCourse, findAllCourses, deleteCourse} from "../services/CourseService";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import "../styling/CourseManagerComponent.css"
import "../styling/CourseEditor.css"


export default class CourseManagerComponent extends React.Component {

    state = {
        courses: [],
        courseBeingEdited: {},
        course: this.props.course,
        layout: "table",
        inputCourseTitle: false
    }

    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
    }

    changeView = () => {
        {
            this.state.layout === "table" &&
            this.setState({
                layout: "grid"
            })
        }
        {
            this.state.layout === "grid" &&
            this.setState({
                layout: "table"
            })
        }
    }

    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(status => this.setState(prevState =>({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                })
            ))
            .catch(error => {
            })
    }

    addCourse = () => {
        let newCourse;
        if (this.state.inputCourseTitle) {
            newCourse = {
                title: this.state.course.title,
                owner: "me",
                modified: (new Date()).toDateString()
            }
        }
        else {
            newCourse = {
                title: "New Course",
                owner: "me",
                modified: (new Date()).toDateString()
            }
        }
        createCourse(newCourse)
            .then(actualCourse => this.setState(prevState => ({
                courses: [
                    ...prevState.courses, actualCourse
                ]
            })))
        this.setState({
            inputCourseTitle: false
        })
    }

    editCourse = (course) => {
        this.setState({
            courseBeingEdited: course
        })
    }

    updateTitle = (event) => {
        const newTitle = event.target.value
        const course = { ...this.state.course }
        course.title = newTitle
        this.setState({
            course: course,
            inputCourseTitle: true
        })
    }


    render () {
        return (
            <BrowserRouter>
                <div className="container">
                    <Route path={["/:layout", "/"]} exact>
                        <div className="container">
                            <div className="form-group row">
                                <h1 className="wbdv-sticky-header">
                                    <a href={"#"} className="fa fa-bars wbdv-hamburger" aria-hidden="true"/>
                                    <span className="mobile-hide course-mag">Course Manager</span>
                                    <input placeholder={"New Course"} type={"text"} className="wbdv-new-course"
                                           onChange={this.updateTitle}/>
                                    <span className="fa fa-plus-circle wbdv-add-course-button" aria-hidden={"true"}
                                          onClick={this.addCourse}/>
                                    <span className="fa fa-plus-circle pull-right wbdv-sticky-add-course-button" aria-hidden={"true"}/>
                                </h1>
                            </div>
                            {
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>
                                            <span className="d-none d-sm-block">Owned by</span></th>
                                        <th>
                                            <span className="d-none d-lg-block">Last modified</span>
                                        </th>
                                        <th>
                                            {
                                                this.state.layout === "table" &&
                                                    <Link to="/grid">
                                                        <button><i className="fa fa-th wbdv-grid-layout" aria-hidden="true"
                                                                   onClick={this.changeView}/></button>
                                                    </Link>
                                            }
                                            {
                                                this.state.layout === "grid" &&
                                                    <Link to="/table">
                                                        <button><i className="fa fa-list-ol wbdv-list-layout" aria-hidden="true"
                                                                   onClick={this.changeView}/></button>
                                                    </Link>
                                            }
                                            <button href="#"><i className="fa fa-sort-alpha-asc wbdv-sort" aria-hidden="true"/></button>
                                        </th>
                                    </tr>
                                    </thead>
                                    {
                                        this.state.layout === "table" &&
                                        <CourseTableComponent
                                            deleteCourse={this.deleteCourse}
                                            courses={this.state.courses}/>
                                    }
                                </table>
                            }
                            {
                                this.state.layout === "grid" &&
                                <CourseGridComponent
                                    deleteCourse={this.deleteCourse}
                                    courses={this.state.courses}/>
                            }
                        </div>
                    </Route>
                    <Route path={["/edit/course/:courseId", "/edit/course/:courseId/modules/:moduleId",
                    "/edit/course/:courseId/modules/:moduleId/lessons/:lessonId"]}
                           exact component={CourseEditorComponent}/>
                </div>
            </BrowserRouter>


        );
    }


}