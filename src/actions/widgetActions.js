export const CREATE_WIDGET = "CREATE_WIDGET";
export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const DELETE_WIDGET = "DELETE_WIDGET";
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC";
export const MOVE_WIDGET = "MOVE_WIDGET";

export const updateWidget = (dispatch, widget) =>
    dispatch({type: UPDATE_WIDGET, widget})

export const createWidget = (widget) => ({
    type: CREATE_WIDGET,
    widget: widget
})

export const deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
})

export const findWidgetsForTopic = (widgets) => ({
    type: FIND_WIDGETS_FOR_TOPIC,
    widgets: widgets
})

export const moveWidget = (from, to) => ({
    type: MOVE_WIDGET,
    from: from,
    to: to
})
