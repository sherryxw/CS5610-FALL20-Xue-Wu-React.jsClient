import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "../../styling/CourseEditor.css"

export default class TopicPills extends React.Component {
    render() {
        return (
            <ul className="nav nav-pills wbdv-topic-pill-list nav-fill">
                <li className="nav-item">
                    <a className="nav-link wbdv-topic-pill" href="#">Topic 1</a></li>
                <li className="nav-item">
                    <a className="nav-link wbdv-topic-pill" href="#">Topic 2</a></li>
                <li className="nav-item">
                    <a className="nav-link wbdv-topic-pill" href="#">Topic 3</a></li>
                <li className="nav-item">
                    <a className="nav-link wbdv-topic-pill" href="#">Topic 4</a></li>
                <li>
                    <a className="fa fa-plus nav-link wbdv-topic-pill" href="#"/></li>
            </ul>
        );
    }




}