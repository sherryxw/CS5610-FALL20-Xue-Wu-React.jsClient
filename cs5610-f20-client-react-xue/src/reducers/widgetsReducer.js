import {
    DELETE_WIDGET,
    CREATE_WIDGET,
    UPDATE_WIDGET,
    EDIT_WIDGET
} from "../actions/widgetActions";

const initialState = {
    widgets: [
        {
            _id: "111",
            name: "Widget 1",
            editing: false
        },
        {
            _id: "333",
            name: "Widget 2",
            editing: true
        },
        {
            _id: "444",
            name: "Widget 3",
            editing: false
        }
    ]
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_WIDGET:
            return {
                //return true: not the same, keep it. return false then skip
                widgets: state.widgets.filter(widget => widget !== action.widget)
            }
        case CREATE_WIDGET:
            return {
                widgets: [...state.widgets, {
                    _id: Date.now() + "",
                    name: "New Widget"
                }]
            }
        case UPDATE_WIDGET :
            return {
                widgets: state.widgets.map(
                    (widget) =>
                        widget._id === action.widget._id ? action.widget : widget)
            }
        default:
            return state
    }
}

export default widgetReducer