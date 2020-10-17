import React from "react";
import {findCourseById} from "../../services/CourseService";
import {Link} from "react-router-dom";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListContainer from "../../containers/WidgetListContainer";
import ModuleListComponent from "./ModuleListComponent";
import {connect} from "react-redux";
import LessonService from "../../services/LessonService";
import ModuleService from "../../services/ModuleService";
import TopicPillsService from "../../services/TopicPillsService";


class CourseEditorComponent extends React.Component {

    //fetching the course info from url, copy in the local state
    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if(moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
        if(lessonId) {
            this.props.findTopicPillsForLesson(lessonId)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const moduleId = this.props.match.params.moduleId
        if(moduleId !== prevProps.match.params.moduleId) {
            if(moduleId){
                this.props.findLessonsForModule(moduleId)
            }
        }
        const lessonId = this.props.match.params.lessonId
        if(lessonId !== prevProps.match.params.lessonId) {
            if(lessonId){
                this.props.findTopicPillsForLesson(lessonId)
            }
        }
    }



    render() {
        return (
            <div className="container">
                <div className="row wbdv-course-title">
                    <div className="col-4">
                        <h2><Link to="/"
                                  className="fa fa-times pull-left wbdv-close"/>
                            <span>{this.props.course.title} - WebDev</span>
                        </h2>
                    </div>
                    <div className="col-8">
                        <LessonTabsComponent/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 wbdv-module-list">
                        <ModuleListComponent/>
                    </div>
                    <div className="col-8 border-set border border-dark">
                        <TopicPillsComponent/>
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
                        <WidgetListContainer/>
                        <i className="fa fa-2x fa-plus-square pull-right wbdv-sticky-button" aria-hidden="true"/>
                    </div>
                </div>
            </div>
        )
    }

}

const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course
})


const propertyToDispatchMapper = (dispatch) => ({
    //reading from url -> go to the server -> set courses to be actual course, dispatch to the reducer
    findCourseById: (courseId) => findCourseById(courseId)
        .then(actualCourse => dispatch({
            type: "SET_COURSES",
            course: actualCourse
        })),
    findModulesForCourse: (courseId) => ModuleService.findModulesForCourse(courseId)
        .then(actualModules => dispatch({
            type: "FIND_MODULES_FOR_COURSE",
            modules: actualModules
        })),
    findLessonsForModule: (moduleId) => LessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: "FIND_LESSONS_FOR_MODULE", lessons, moduleId
        })),
    findTopicPillsForLesson: (lessonId) => TopicPillsService.findTopicPillsForLesson(lessonId)
        .then(topicPills => dispatch({
            type: "FIND_TOPICS_FOR_LESSON", topicPills, lessonId
        }))
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(CourseEditorComponent)