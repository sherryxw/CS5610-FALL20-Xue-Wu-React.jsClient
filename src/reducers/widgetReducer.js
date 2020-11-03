const initialState = {
    widgets: []
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets,
                topicId: action.topicId
            }
        case "FIND_ALL_WIDGETS":
            return {
                ...state,
                widgets: action.widgets
            }
        case "CREAT_WIDGET_FOR_TOPIC":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(widget =>
                widget.id === action.widget.id ? action.widget: widget)
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        default:
            return state
    }
}

export default widgetReducer