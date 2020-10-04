import React from "react";

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
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/> <div className="card-body">
                <h5>{this.state.course.title}</h5>
                <p>{this.state.course.owner}</p>
                <p>{this.state.course.modified}</p>
            </div></div>
        );
    }
}

export default CourseGridComponent