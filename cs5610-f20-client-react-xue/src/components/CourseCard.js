import React from "react";
import {Link} from "react-router-dom";
import {updateCourse} from "../services/CourseService";

class CourseCard extends React.Component {
    state = {
        editing: false,
        course: this.props.course
    }

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
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
            <div className="card col-sm-6 col-md-4 col-lg-3 col-xl-2 col-12 pl-2">
                <img className="card-img-bottom" src="https://picsum.photos/300/200"/>
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