import React from "react";
import CourseGridComponent from "./CourseGridComponent";
import "../styling/CourseListComponent.css"
import {findAllCourses, deleteCourse, createCourse} from "../services/CourseService";
import CourseTableComponent from "./CourseTableComponent";



class CourseListComponent extends React.Component {

    state = {
        courses: [],
        courseBeingEdited: {},
        course: this.props.course,
        listView: true,
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
            this.state.listView === true &&
            this.setState({
                listView: false
            })
        }
        {
            this.state.listView === false &&
            this.setState({
                listView: true
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


    render() {
        return (
            <div className="container">
                <div className="form-group row">
                    <h1 class="wbdv-sticky-header">
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
                                    this.state.listView &&
                                    <button><i className="fa fa-th wbdv-grid-layout" aria-hidden="true"
                                               onClick={this.changeView}/></button>
                                }
                                {
                                    !this.state.listView &&
                                    <button><i className="fa fa-list-ol wbdv-list-layout" aria-hidden="true"
                                               onClick={this.changeView}/></button>
                                }
                                <button href="#"><i className="fa fa-sort-alpha-asc wbdv-sort" aria-hidden="true"/></button>
                            </th>
                        </tr>
                        </thead>
                        {
                            this.state.listView &&
                            <CourseTableComponent
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}/>

                        }
                    </table>
                }
                {
                    !this.state.listView &&
                    <CourseGridComponent
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                }
            </div>
        );
    }
}

export default CourseListComponent

