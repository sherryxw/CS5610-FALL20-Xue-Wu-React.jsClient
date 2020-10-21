import React from "react";
import {connect} from "react-redux";
import LessonService from "../../services/LessonService";
import {Link} from "react-router-dom";

let selected_id = ""

const LessonTabs = (
    {
        course={},
        moduleId,
        lessons=[],
        createLesson,
        deleteLesson,
        updateLessonTitle,
        edit,
        ok,
        lessonId
    }) =>

    <div>
        <ul className="nav nav-tabs wbdv-lesson-tabs tabs-border">
            {
                lessons.map(lesson =>
                        <li key={lesson._id} className="nav-item">
                            <div className={`nav-link tab-info 
                            ${selected_id===lesson._id || lessonId===lesson._id ? 'tab-active' : ''}`}>
                                {
                                    !lesson.editing &&
                                        <span>
                                            <Link to={`/edit/course/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}
                                                  className="link">{lesson.title}</Link>
                                            <i onClick={() => {edit(lesson); selected_id=lesson._id}}
                                               className="fa fa-pencil pull-right"/>
                                        </span>
                                }
                                {
                                    lesson.editing &&
                                        <span>
                                            <input
                                                onChange={(event) => updateLessonTitle({
                                                ...lesson,
                                                title: event.target.value
                                            })} value={lesson.title}/>
                                            <i onClick={() => {ok(lesson);selected_id=""}}
                                               className="fa fa-check"/>
                                            <i onClick={() => deleteLesson(lesson._id)} className="fa fa-times"/>
                                        </span>
                                }
                            </div>
                        </li>
                )
            }
        </ul>
        <i onClick={() => createLesson(moduleId)}
           className="nav-link fa fa-plus wbdv-lesson-add-btn fa-2x pull-right" aria-hidden="true"/>
    </div>

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    lessonId: state.topicPillsReducer.lessonId,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course
})

const dispatchToPropertyMapper = (dispatch) => ({
    ok: (lesson) =>
        LessonService.updateLesson(lesson._id,{
            ...lesson, editing: false
        }).then(status => dispatch({
            type: "UPDATE_LESSON",
            lesson: {...lesson, editing: false}
        })),
    edit: (lesson) =>
        LessonService.updateLesson(lesson._id, {
            ...lesson, editing: true
        }).then(status => dispatch({
            type: "UPDATE_LESSON",
            lesson: {...lesson, editing: true}
        })),
    updateLesson: (newLesson) =>
        LessonService.updateLesson(newLesson._id, newLesson)
            .then(actualLesson => dispatch({
                type: "UPDATE_LESSON",
                lesson: actualLesson
            })),
    deleteLesson: (lessonId) =>
        LessonService.deleteLesson(lessonId)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonId
            })),
    createLesson: (moduleId) =>
        LessonService.createLesson(
            moduleId, {
                title: "New Lesson"
            })
            .then(actualLesson => dispatch({
                type: "CREATE_LESSON",
                lesson: actualLesson
            })),
    updateLessonTitle: (lesson) =>
        dispatch({
            type: "UPDATE_LESSON", lesson
        })
})

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(LessonTabs)