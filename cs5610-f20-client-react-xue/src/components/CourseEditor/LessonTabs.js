import React from "react";


export default class LessonTabs extends React.Component {
    render() {
        return (
            <ul className="nav nav-tabs wbdv-lesson-tabs tabs-border">
                <li className="nav item"><a className="nav-link tab-info" href="#">Build</a></li>
                <li className="nav item"><a className="nav-link tab-info" href="#">Pages</a></li>
                <li className="nav item"><a className="nav-link tab-info" href="#">Theme</a></li>
                <li className="nav item"><a className="nav-link tab-info" href="#">Store</a></li>
                <li className="nav item"><a className="nav-link tab-info" href="#">Apps</a></li>
                <li className="nav item"><a className="nav-link tab-info" href="#">Settings</a></li>
                <li className="nav item"><i className="nav-link fa fa-plus wbdv-lesson-add-btn" aria-hidden="true"></i>
                </li>
            </ul>

        );
    }
}