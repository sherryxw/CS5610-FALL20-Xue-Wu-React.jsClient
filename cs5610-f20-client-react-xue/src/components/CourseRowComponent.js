import React from "react";
import {updateCourse} from "../services/CourseService";
import {Link} from "react-router-dom";


class CourseRowComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            course: this.props.course,
            editing: false,
            selected: false,
        }
    }

    updateTitle = (event) => {
        const newTitle = event.target.value
        this.setState(prevState => ({
            course: {...this.state.course, title: newTitle}
        }))
    }

    updateCourseToServer = () => {
        updateCourse(this.state.course._id, this.state.course)
            .then(this.setState({editing: false}))
    }


    selectedToggle = () => {
        if (this.state.selected) {
            this.setState({
                background: "white",
                selected: false,
                font: "black"
            });
        } else {
            this.setState({
                background: "aliceblue",
                selected: true,
                font: "white"
            });
        }
    };


    render() {
        return (
            <tr onClick={this.selectedToggle} style={{
                background: this.state.background,
                font: this.state.font
            }}>
                <td>
                    <i className="fa fa-file-text-o" aria-hidden="true"/>
                    {
                        this.state.editing &&
                        <input
                            // className="form-control"
                            onChange={this.updateTitle}
                            value={this.state.course.title}/>
                    }
                    {
                        !this.state.editing &&
                        <Link to={`/edit/course/${this.state.course._id}`}>{this.state.course.title}</Link>
                    }
                </td>
                <td>
                    <span className="d-none d-sm-block">{this.state.course.owner}</span></td>
                <td>
                    <span className="d-none d-lg-block">{this.state.course.modified}</span>
                </td>
                <td>
                    {
                        !this.state.editing &&
                        <i className="fa fa-2x fa-trash" onClick={() => this.props.deleteCourse(this.state.course)}/>
                    }
                    {
                        this.state.editing &&
                        <i className="fa fa-2x fa-check" onClick={this.updateCourseToServer}/>
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