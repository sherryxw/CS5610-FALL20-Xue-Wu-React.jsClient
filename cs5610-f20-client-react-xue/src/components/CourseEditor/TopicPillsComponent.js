import React from "react";
import {connect} from "react-redux";
import TopicPillsService from "../../services/TopicPillsService";


const topicPills = ({topicPills=[],
                        lessonId,
                        createTopic,
                        deleteTopicPills,
                        updateTopicTitle,
                        ok,
                        edit
}) =>
    <div>
        <ul className="nav nav-pills wbdv-topic-pill-list">
            {
                topicPills.map(topicPill =>
                    <li className="nav-item" key={topicPill._id}>
                        {
                            !topicPill.editing &&
                            <span className="nav-link wbdv-topic-pill">{topicPill.title}
                                <i className="fa fa-pencil pull-right" onClick={() => edit(topicPill)}/>
                            </span>
                        }
                        {
                            topicPill.editing &&
                                <span>
                                    <input value={topicPill.title}
                                           onChange={(event) => updateTopicTitle({
                                               ...topicPill,
                                               title: event.target.value})}/>
                                    <i className="fa fa-check" onClick={() => ok(topicPill)}/>
                                    <i className="fa fa-times" onClick={() => deleteTopicPills(topicPill._id)}/>
                                </span>
                        }

                    </li>
                )
            }
        </ul>
        <i onClick={() => createTopic(lessonId)}
           className="fa fa-plus fa-2x nav-link wbdv-topic-pill wbdv-topic-add-btn pull-right" aria-hidden="true"/>
    </div>


const stateToPropertyMapper = (state) => ({
    topicPills: state.topicPillsReducer.topicPills,
    lessonId: state.topicPillsReducer.lessonId,
})




const dispatchToPropertyMapper = (dispatch) => ({
    createTopic: (lessonId) => TopicPillsService.createTopic(lessonId, {
        title: "New Topic"
    }).then(actualTopic => dispatch({
        type: "CREATE_TOPIC_FOR_LESSON",
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









