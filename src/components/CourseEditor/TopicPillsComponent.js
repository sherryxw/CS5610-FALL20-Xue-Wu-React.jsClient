import React from "react";
import {connect} from "react-redux";
import TopicPillsService from "../../services/TopicPillsService";
import {Link} from "react-router-dom";
let selected_id = ""
const topicPills = ({topicPills=[],
                        course={},
                        lessonId,
                        moduleId,
                        topicPillsId,
                        createTopic,
                        deleteTopicPills,
                        updateTopicTitle,
                        ok,
                        edit
}) =>
    <div>
        <ul className="nav nav-pills wbdv-topic-pill-list">
            <li>
                <Link to={`/edit/course/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/topic123`}
                      className={`nav-link wbdv-topic-pill`}>
                      Topic123</Link>
            </li>
            <li>
                <Link to={`/edit/course/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/topic234`}
                      className={`nav-link wbdv-topic-pill`}>
                Topic234</Link>

            </li>
            {/*{*/}
            {/*    topicPills.map(topicPill =>*/}
            {/*        <li className={`nav-item */}
            {/*        ${ selected_id===topicPill._id || topicPillsId===topicPill._id ? 'tab-active' : ''}`}*/}
            {/*            key={topicPill._id}>*/}
            {/*            {*/}
            {/*                !topicPill.editing &&*/}
            {/*                <Link to={`/edit/course/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/${topicPill._id}`}*/}
            {/*                className={`nav-link wbdv-topic-pill`}>*/}
            {/*                        {topicPill.title}*/}
            {/*                    <i className="fa fa-pencil pull-right"*/}
            {/*                       onClick={() => {*/}
            {/*                           edit(topicPill); selected_id=topicPill._id}}/>*/}
            {/*                </Link>*/}
            {/*            }*/}
            {/*            {*/}
            {/*                topicPill.editing &&*/}
            {/*                    <span>*/}
            {/*                        <input value={topicPill.title}*/}
            {/*                               onChange={(event) => updateTopicTitle({*/}
            {/*                                   ...topicPill,*/}
            {/*                                   title: event.target.value})}/>*/}
            {/*                        <i className="fa fa-times pull-right" onClick={() => deleteTopicPills(topicPill._id)}/>*/}
            {/*                        <i className="fa fa-check pull-right" onClick={() => {*/}
            {/*                            ok(topicPill); selected_id=""*/}
            {/*                    }}/>*/}
            {/*                    </span>*/}
            {/*            }*/}

            {/*        </li>*/}
            {/*    )*/}
            {/*}*/}
        </ul>
        <i onClick={() => createTopic(lessonId)}
           className="fa fa-plus fa-2x nav-link wbdv-topic-pill wbdv-topic-add-btn pull-right" aria-hidden="true"/>
    </div>


const stateToPropertyMapper = (state) => ({
    topicPills: state.topicPillsReducer.topicPills,
    topicPillsId: state.widgetReducer.topicPillId,
    lessonId: state.topicPillsReducer.lessonId,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course,
})




const dispatchToPropertyMapper = (dispatch) => ({
    createTopic: (lessonId) => TopicPillsService.createTopic(lessonId, {
        title: "New Topic"
    }).then(actualTopic => dispatch({
        type: "CREATE_TOPIC",
        topicPills: actualTopic
    })),
    deleteTopicPills: (topicPillId) => TopicPillsService.deleteTopic(topicPillId)
        .then(status => dispatch({
            type: "DELETE_TOPIC", topicPillId
        })),
    updateTopicTitle: (topicPill) => dispatch({
        type: "UPDATE_TOPIC", topicPill
    }),
    ok: (topicPill) =>
        TopicPillsService.updateTopic({
            ...topicPill, editing: false
        }).then(status => dispatch({
            type: "UPDATE_TOPIC",
            topicPill: {...topicPill, editing: false}
        })),
    edit: (topicPill) =>
        TopicPillsService.updateTopic({
            ...topicPill, editing: true
        }).then(status => dispatch({
            type: "UPDATE_TOPIC",
            topicPill: {...topicPill, editing: true}
        })),

})



export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(topicPills)









