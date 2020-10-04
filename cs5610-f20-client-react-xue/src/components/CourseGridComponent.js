import React from "react";
import CourseRowComponent from "./CourseRowComponent";

class CourseListComponent extends React.Component {





    render() {
        return (
            <div>
                <div className="form-group row">
                    <h1 class="wbdv-sticky-header">
                        <a href={"#"} className="fa fa-bars" aria-hidden="true"/>
                        <span className="mobile-hide">Course Manager</span>
                        <input placeholder={"New Course"} type={"text"} className=".wbdv-new-course"
                               onChange={this.updateTitle}/>
                        <i className="fa fa-plus-circle pull-right .wbdv-add-course-button" aria-hidden={"true"}
                           onClick={this.addCourse}/>
                    </h1>
                </div>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Recent documents</th>
                        <th>Owned by me</th>
                        <th>
                            <a href="#"><i className="fa fa-th .wbdv-grid-layout" aria-hidden="true"/></a></th>
                        <th>
                            <a href="#"><i className="fa fa-sort-alpha-asc wbdv-sort float-right" aria-hidden="true"/></a>
                        </th>
                        <th>
                            <a href="#"><i className="fa fa-folder" aria-hidden="true"></i> </a>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {

                    }
                    </tbody>
                </table>








            </div>
        )
    }





}