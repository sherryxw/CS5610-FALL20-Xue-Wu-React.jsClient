import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import CourseGridComponent from "./CourseGridComponent";
import "./CourseList.css"
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService";


class CourseListComponent extends React.Component {

    state = {
        courses: [],
        courseBeingEdited: {},
        courseTitle: "Some Course",
        course: this.props.course,
        listView: true
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
        const newCourse = {
            title: this.state.course.title,
            owner: "me",
            modified: (new Date()).toDateString()
        }

        createCourse(newCourse)
            .then(actualCourse => this.setState(prevState => ({
                courses: [
                    ...prevState.courses, actualCourse
                ]
            })))
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
            course: course
        })
    }

    render() {
        return (
            <div>
                <div className="form-group row">
                    <h1 class="wbdv-sticky-header">
                        <a href={"#"} className="fa fa-bars" aria-hidden="true"/>
                        <span className="mobile-hide course-mag">Course Manager</span>
                        <input placeholder={"New Course"} type={"text"} className="wbdv-new-course"
                               onChange={this.updateTitle}/>
                        <span className="fa fa-plus-circle pull-right wbdv-add-course-button" aria-hidden={"true"}
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
                                <button><i className="fa fa-th wbdv-grid-layout" aria-hidden="true"
                                           onClick={this.changeView}/></button>
                                <button><i className="fa fa-list-ol" aria-hidden="true"
                                           onClick={this.changeView}/></button>
                                <button href="#"><i className="fa fa-sort-alpha-asc wbdv-sort" aria-hidden="true"/></button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.courses.map(course => {
                                    if (this.state.listView)
                                        return (
                                            <CourseRowComponent
                                                key={course._id}
                                                courseBeingEdited={this.state.courseBeingEdited}
                                                editCourse={this.editCourse}
                                            deleteCourse={this.deleteCourse}
                                            course={course}/>)
                                    if (!this.state.listView)
                                        return (
                                            <tr className="col-3">
                                                <CourseGridComponent
                                                    key={course._id}
                                                    courseBeingEdited={this.state.courseBeingEdited}
                                                    editCourse={this.editCourse}
                                                    deleteCourse={this.deleteCourse}
                                                    course={course}/>
                                            </tr>
                                        )
                                }
                            )
                        }
                        </tbody>
                    </table>
                }

            </div>
        );
    }
}

export default CourseListComponent

