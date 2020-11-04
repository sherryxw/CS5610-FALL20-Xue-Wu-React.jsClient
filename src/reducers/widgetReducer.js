const initialState = {
    widgets: []
}

export const widgetReducer = (state = initialState, action) => {
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
                ...state,
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case "MOVE_POSITION":
            const newWidgets = [...state.widgets];
            //update new widget position
            newWidgets[action.fromPos] = newWidgets.splice(action.toPos, 1, newWidgets[action.fromPos])[0];
            return {
                ...state,
                widgets: newWidgets
            }
        default:
            return state
    }
}

export default widgetReducer