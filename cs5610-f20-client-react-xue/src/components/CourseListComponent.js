import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService";

class CourseListComponent extends React.Component {

    state = {
        courses: [],
        courseBeingEdited: {},
        courseTitle: "Some Course",
        course: this.props.course
    }

    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
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
            title: "New Course",
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


    render() {
        return (
            <div>
                <h1>
                    <a href={"#"} className="fa fa-bars" aria-hidden="true"/>
                    Course Manager
                    <input placeholder={"New Course"} type={"text"}/>
                    <i className="fa fa-plus-circle pull-right" aria-hidden={"true"}
                       onClick={this.addCourse}/>
                </h1>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Title</th>
                        <th>Owned by</th>
                        <th>Last modified</th>
                        <th>
                            <a href="#"><i className="fa fa-th" aria-hidden="true"/></a>
                            <a href="#"><i className="fa fa-sort-alpha-asc" aria-hidden="true"/></a>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.courses.map(course =>
                            <CourseRowComponent
                                key={course._id}
                                courseBeingEdited={this.state.courseBeingEdited}
                                editCourse={this.editCourse}
                                deleteCourse={this.deleteCourse}
                                course={course}/>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CourseListComponent

