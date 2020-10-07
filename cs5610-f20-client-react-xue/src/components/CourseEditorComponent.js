import React from "react";
import {findCourseById} from "../services/CourseService";


export default  class CourseEditorComponent extends React.Component{

    state = {
        course: {
            _id: "",
            title: ""
        }
    }

    componentDidMount() {
        findCourseById(this.props.match.params.courseId)
            .then(actualCoures => this.setState({
                course: actualCoures
            }))
    }


    render() {
        return (
            <div>
                <h1>Course Editor {this.props.match.params.courseId}</h1>
                <h2>{this.state.course.title}</h2>
            </div>
        )
    }






}

