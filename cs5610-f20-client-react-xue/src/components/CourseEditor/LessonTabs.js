import React from "react";
import "../../styling/CourseEditor.css"



export default class LessonTabs extends React.Component {
    render() {
        return (
            <ul className="nav nav-tabs tabs-border">
                <li className="nav-item"><a className="nav-link" href="#">Build</a></li>
                <li className="nav-item"><a className="nav-link active" href="#">Pages</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Theme</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Store</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Apps</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
                <li className="nav-item"><a className="fa fa-2x fa-plus wbdv-lesson-add-btn" aria-hidden="true"/></li>
            </ul>

        );
    }
}