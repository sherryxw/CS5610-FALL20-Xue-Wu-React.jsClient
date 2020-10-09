import React from "react";
import "../../styling/CourseEditor.css"

export default class ModuleList extends React.Component {
    render() {
        return (
            <ul className="wbdv-module-item">
                <li className="list-group-item wbdv-module-item-style">Module 1 - JQuery
                    <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/></li>
                <li className="list-group-item wbdv-module-item-style">Module 2 -React
                    <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/></li>
                <li className="list-group-item wbdv-module-item-style">Module 3 - Redux
                    <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/></li>
                <li className="list-group-item wbdv-module-item-style">Module 4 - Native
                    <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/></li>
                <li className="list-group-item wbdv-module-item-style">Module 5 - Angular
                    <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/></li>
                <li className="list-group-item wbdv-module-item-style">Module 6 - Node
                    <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/></li>
                <li className="list-group-item wbdv-module-item-style">Module 7 - Mongo
                    <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/></li>
                <li><i className="fa fa-plus pull-right wbdv-module-item-add-btn"/></li>
            </ul>
        );
    }
}