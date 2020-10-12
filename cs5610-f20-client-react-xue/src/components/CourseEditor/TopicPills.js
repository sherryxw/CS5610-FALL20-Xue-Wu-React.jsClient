import React from "react";


export default class TopicPills extends React.Component {
    render() {
        return (
            <ul className="nav nav-pills wbdv-topic-pill-list nav-fill">
                <li className="nav-item">
                    <a className="nav-link active wbdv-topic-pill" href="#">Topic 1</a></li>
                <li className="nav-item">
                    <a className="nav-link wbdv-topic-pill" href="#">Topic 2</a></li>
                <li className="nav-item">
                    <a className="nav-link wbdv-topic-pill" href="#">Topic 3</a></li>
                <li className="nav-item">
                    <a className="nav-link wbdv-topic-pill" href="#">Topic 4</a></li>
                <li>
                    <a className="fa fa-plus nav-link wbdv-topic-pill wbdv-topic-add-btn" href="#"/></li>
            </ul>
        );
    }




}