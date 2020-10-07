import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "./CourseEditor.css"

export default class LessonTabs extends React.Component {
    render() {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item"><a className="nav-link tab-info" href="#">Build</a></li>
                <li className="nav-item"><a className="nav-link tab-info" href="#">Pages</a></li>
                <li className="nav-item"><a className="nav-link tab-info" href="#">Theme</a></li>
                <li className="nav-item"><a className="nav-link tab-info" href="#">Store</a></li>
                <li className="nav-item"><a className="nav-link tab-info" href="#">Apps</a></li>
                <li className="nav-item"><a className="nav-link tab-info" href="#">Settings</a></li>
                <li className="nav-item">
                    <i className="nav-link fa fa-2x fa-plus wbdv-lesson-add-btn" aria-hidden="true"/></li>
            </ul>

        );
    }
}