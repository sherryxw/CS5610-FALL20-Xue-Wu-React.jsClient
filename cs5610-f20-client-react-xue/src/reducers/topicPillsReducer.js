const initialState = {
    topicPills: []
}


const topicPillsReducer = (state=initialState, action) => {
    switch(action.type){
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topicPills: action.topicPills,
                topicPillsId: action.topicPillId,
                lessonId: action.lessonId
            }
        case "CREATE_TOPIC":
            return {
                ...state,
                topicPills: [
                    ...state.topicPills,
                    action.topicPills
                ]
            }
        case "DELETE_TOPIC":
            return {
                ...state,
                topicPills: state.topicPills.filter(topicPill => topicPill._id !== action.topicPillId)
            }
        case "UPDATE_TOPIC":
            return {
                ...state,
                topicPills: state.topicPills.map(topicPill =>
                    topicPill._id === action.topicPill._id ? action.topicPill: topicPill)
            }
        default:
            return state;
    }
}


export default topicPillsReducer