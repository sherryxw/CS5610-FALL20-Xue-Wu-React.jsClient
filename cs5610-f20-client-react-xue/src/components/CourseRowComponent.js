import React from "react";
import {updateCourse} from "../services/CourseService";

class CourseRowComponent extends React.Component {
    state = {
        editing: false,
        courseTitle: "Some Course",
        course: this.props.course
    }

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    updateTitle = (event) => {
        const newTitle = event.target.value
        const course = { ...this.state.course }
        course.title = newTitle
        this.setState({
            course: course
        })
    }

    updateCourse = () => {
        this.setState({editing: false})
        updateCourse(this.state.course._id, this.state.course)
    }

    render() {
        return (
            <tr>
                <td>
                    <i className="fa fa-file-text-o" aria-hidden="true"/>
                    {
                        this.state.editing === true &&
                        <input
                            onChange={this.updateTitle}
                            value={this.state.course.title}/>
                    }
                    {
                        this.state.editing === false &&
                        <label>{this.state.course.title}</label>
                    }
                </td>
                <td>
                    <span className="d-none d-sm-block">{this.props.course.owner}</span></td>
                <td>
                    <span className="d-none d-lg-block">{this.props.course.modified}</span>
                </td>
                <td>
                    <i className="fa fa-2x fa-trash" onClick={() => this.props.deleteCourse(this.props.course)}>
                    </i>
                    {
                        this.state.editing &&
                        <i className="fa fa-2x fa-check" onClick={this.updateCourse}/>
                    }
                    {
                        !this.state.editing &&
                        <i className="fa fa-2x fa-pencil" onClick={() => this.setState({editing: true})}/>
                    }
                </td>
            </tr>
        );
    }
}

export default CourseRowComponent