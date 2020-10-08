import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "./CourseEditor.css"


export default class ModuleList extends React.Component {
    render() {
        return (
            <ul>
                <li className="wbdv-module-item-title"><h3>Module 1 - JQuery
                    <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/></h3>
                </li>
                <li className="active wbdv-module-item-title"><h3>Module 2 -React
                    <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/></h3></li>
                <li className="wbdv-module-item-title"><h3>Module 3 - Redux
                    <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/></h3></li>
                <li className="wbdv-module-item-title"><h3>Module 4 - Native
                    <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/></h3></li>
                <li className="wbdv-module-item-title"><h3>Module 5 - Angular
                    <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/></h3></li>
                <li className="wbdv-module-item-title"><h3>Module 6 - Node
                    <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/></h3></li>
                <li className="wbdv-module-item-title"><h3>Module 7 - Mongo
                    <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/></h3></li>
                <i className="fa fa-plus fa-2x float-right wbdv-module-item-add-btn" aria-hidden="true"/>
            </ul>
        );
    }
}