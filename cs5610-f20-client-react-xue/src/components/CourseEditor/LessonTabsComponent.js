import React from "react";
import {connect} from "react-redux";
import LessonService, {updateLesson} from "../../services/LessonService";

const LessonTabs = (
    {
        moduleId,
        lessons=[],
        createLessonForModule,
        deleteLesson,
        updateLessonTitle,
        edit,
        ok
    }) =>
    <div>
        <ul className="nav nav-tabs wbdv-lesson-tabs tabs-border">
            {
                lessons.map(lesson =>
                        <li key={lesson._id} className="nav-item">
                            <a className="nav-link tab-info">
                                {
                                    !lesson.editing &&
                                        <span>
                                            {lesson.title}
                                            <i onClick={() => edit(lesson)} className="fa fa-pencil pull-right"/>
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
                                            <i onClick={() => ok(lesson)} className="fa fa-check"/>
                                            <i onClick={() => deleteLesson(lesson._id)} className="fa fa-times"/>
                                        </span>
                                }
                            </a>
                        </li>
                )
            }
        </ul>
        <i onClick={() => createLessonForModule(moduleId)}
           className="nav-link fa fa-plus wbdv-lesson-add-btn fa-2x pull-right" aria-hidden="true"/>
    </div>

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId
})

const dispatchToPropertyMapper = (dispatch) => ({
    ok: (lesson) =>
        LessonService.updateLesson({
            ...lesson, editing: false
        }).then(status => dispatch({
            type: "UPDATE_LESSON",
            lesson: {...lesson, editing: false}
        })),
    edit: (lesson) =>
        LessonService.updateLesson({
            ...lesson, editing: true
        }).then(status => dispatch({
            type: "UPDATE_LESSON",
            lesson: {...lesson, editing: true}
        })),
    updateLesson: (newLesson) =>
        LessonService.updateLesson(newLesson)
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
    createLessonForModule: (moduleId) =>
        LessonService.createLessonForModule(
            moduleId, {
                title: "New Lesson"
            })
            .then(actualLesson => dispatch({
                type: "CREATE_LESSON_FOR_MODULE",
                lesson: actualLesson
            })),
    updateLessonTitle: (lesson) =>
        dispatch({
            type: "UPDATE_LESSON", lesson
        })
})

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(LessonTabs)