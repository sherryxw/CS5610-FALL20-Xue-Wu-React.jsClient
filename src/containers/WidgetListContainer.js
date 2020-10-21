import React from "react";
import {connect} from "react-redux";
import WidgetList from "../components/CourseEditor/WidgetList";
import {createWidget, deleteWidget, updateWidget, editWidget, okWidget} from "../actions/widgetActions"


const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets
})


const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widget) => deleteWidget(dispatch, widget),
    createWidget: () => createWidget(dispatch),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    editWidget: (widget) => editWidget(dispatch, widget),
    okWidget: (widget) => okWidget(dispatch, widget)
})



export default connect(stateToPropertyMapper, propertyToDispatchMapper)(WidgetList)