import React from "react";
import {updateCourse} from "../services/CourseService";

class CourseGridComponent extends React.Component {
    state = {
        editing: false,
        course: this.props.course
    }

    constructor(props) {
        super(props)
    }


    render() {
        return (
                <td>
                    <div className="card" styles={{width: '5rem'}}>
                        <img src="https://picsum.photos/300/200"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.course.title}</h5>
                            <p className="card-text">Modified {this.state.course.modified}</p>
                            <a href="#" className="fa fa-list-ol">More...</a>
                        </div>
                    </div>
                </td>
        )}
}

export default CourseGridComponent