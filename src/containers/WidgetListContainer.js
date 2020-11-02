import React from "react";
import {connect} from "react-redux";
import WidgetList from "../components/CourseEditor/WidgetList";
import {deleteWidget} from "../actions/widgetActions"


const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets
})


const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widget) => deleteWidget(dispatch, widget),
})



export default connect(stateToPropertyMapper, propertyToDispatchMapper)(WidgetList)