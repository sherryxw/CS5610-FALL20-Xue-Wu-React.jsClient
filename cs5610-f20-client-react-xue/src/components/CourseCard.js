import React from "react";
import {Link} from "react-router-dom";
import {updateCourse} from "../services/CourseService";
import "../styling/CourseEditor.css"

class CourseCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            course: this.props.course
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

    render() {
        return (
            <div className="card col-sm-6 col-md-4 col-lg-3 col-xl-2 col-12 pl-2 card-pos">
                <img className="card-img-bottom"
                     src="https://img.resume.com/examples/new/customer-service-two-year-exp.jpeg"/>
                <div className="card-body">
                    <h5 className="card-title">
                        <i className="fa fa-file-text-o" aria-hidden="true"/>
                        {
                            this.state.editing &&
                            <input
                                className="form-control"
                                onChange={this.updateTitle}
                                value={this.state.course.title}/>
                        }
                        {
                            !this.state.editing &&
                            <Link to={`/edit/${this.state.course._id}`}>{this.state.course.title}</Link>
                        }
                    </h5>
                    <p className="card-text"> Modified {this.state.course.modified}</p>
                    <i className="fa fa-2x fa-trash pull-right" onClick={() => this.props.deleteCourse(this.props.course)}/>
                    {
                        this.state.editing &&
                        <i className="fa fa-2x fa-check pull-right" onClick={this.updateCourseToServer}/>
                    }
                    {
                        !this.state.editing &&
                        <i className="fa fa-2x fa-pencil pull-right" onClick={() => this.setState({editing: true})}/>
                    }
                </div>
            </div>)
    }
}
export default CourseCard