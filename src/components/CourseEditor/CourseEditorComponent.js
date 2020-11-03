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
import WidgetService from "../../services/WidgetService"


class CourseEditorComponent extends React.Component {
    //when refresh the screen
    //fetching the course info from url, copy in the local state
    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId
        if(courseId) {
            this.props.findCourseById(courseId)
            this.props.findModulesForCourse(courseId)
            //clean lesson and topic
            this.props.clearTopic("0000")
            this.props.clearLesson("0000")
            this.props.cleanWidget("00000")
        }
        if(moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
        if(lessonId) {
            this.props.findTopicPillsForLesson(lessonId)
        }
        if(topicId) {
            this.props.findWidgetsForTopic(topicId)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //whne update the screen
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId

        if(moduleId !== prevProps.match.params.moduleId) {
            if(moduleId) {
                this.props.findLessonsForModule(moduleId)
                //topic should be empty here
                this.props.clearTopic("000")
                this.props.cleanWidget("0000")
            }
        }
        if(lessonId !== prevProps.match.params.lessonId) {
            if(lessonId){
                this.props.findTopicPillsForLesson(lessonId)
            }
        }

        if(topicId !== prevProps.match.params.lessonId) {
            this.props.findWidgetsForTopic(topicId)
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
                        <br/>
                        <WidgetListContainer/>
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
    findAllWidgets: () => WidgetService.findAllWidgets().then(widgets => dispatch({
        type: "FIND_WIDGETS_FOR_TOPIC", widgets
        })),
    //reading from url -> go to the server -> set courses to be actual course, dispatch to the reducer
    findCourseById: (courseId) => findCourseById(courseId)
        .then(actualCourse => dispatch({
            type: "SET_COURSES",
            course: actualCourse
        })),
    findModulesForCourse: (courseId) => ModuleService.findModulesForCourse(courseId)
        .then(actualModules => dispatch({
            type: "FIND_MODULES_FOR_COURSE",
            modules: actualModules, courseId
        })),
    findLessonsForModule: (moduleId) => LessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: "FIND_LESSONS_FOR_MODULE", lessons, moduleId
        })),
    findTopicPillsForLesson: (lessonId) => TopicPillsService.findTopicPillsForLesson(lessonId)
        .then(topicPills => dispatch({
            type: "FIND_TOPICS_FOR_LESSON", topicPills, lessonId
        })),
    findWidgetsForTopic: (topicId) => WidgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
            type: "FIND_WIDGETS_FOR_TOPIC", widgets, topicId
        })),
    clearTopic: (noLessonId) => TopicPillsService.findTopicPillsForLesson(noLessonId)
        .then(topicPills => dispatch({
            type: "FIND_TOPICS_FOR_LESSON", topicPills, noLessonId
        })),
    clearLesson: (noModuleId) => LessonService.findLessonsForModule(noModuleId)
        .then(lesson => dispatch({
            type: "FIND_LESSONS_FOR_MODULE", lesson, noModuleId
        })),
    cleanWidget: (noTopicId) => WidgetService.findWidgetsForTopic(noTopicId)
        .then(widget => dispatch({
            type: "FIND_WIDGETS_FOR_TOPIC", widget, noTopicId
        }))

})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(CourseEditorComponent)