import React from "react";
import {findCourseById} from "../../services/CourseService";
import {Link} from "react-router-dom";
import "./CourseEditor.css"

import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import WidgetList from "./WidgetList";


export default  class CourseEditorComponent extends React.Component{

    state = {
        course: {
            _id: "",
            title: ""
        }
    }

    componentDidMount() {
        findCourseById(this.props.match.params.courseId)
            .then(actualCoures => this.setState({
                course: actualCoures
            }))
    }


    render() {
        return (
            <div className="container">
                <div className="row wbdv-course-title">
                    <div className="col-4">
                        <h2><Link to="/CourseListComponent"
                                  className="fa fa-times pull-left wbdv-course-editor wbdv-close"/>
                            <span>{this.state.course.title} - WebDev</span>
                        </h2>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 wbdv-module-list">
                        <ModuleList/>
                    </div>
                    <div className="col-8 border-set border border-dark">
                        <TopicPills/>
                        <br/>
                        <div className="d-flex bd-highlight justify-content-end mb-3">
                            <div className="d-flex align-items-center">
                                <span className="d-flex"><button className="btn btn-success btn-sm"
                                                                 type="submit">Save</button></span>
                                <span className="d-flex"><a className="nav-link pre" href="#">Preview</a></span>
                                <span className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitches"/>
                                    <label className="custom-control-label" htmlFor="customSwitches"/></span>
                            </div>
                        </div>
                        <br/>
                        <WidgetList/>
                        <i className="fa fa-2x fa-plus-square pull-right wbdv-sticky-button" aria-hidden="true"/>
                    </div>
                </div>
            </div>
        )
    }


}

