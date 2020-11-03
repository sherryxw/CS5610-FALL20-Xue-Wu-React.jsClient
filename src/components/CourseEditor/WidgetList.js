import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "../widgets/HeadingWidget";
import ParagraphWidget from "../widgets/ParagraphWidget";
import WidgetService from "../../services/WidgetService";

let editing = false;
const WidgetList = ({
                        widgets=[],
                        topicId,
                        deleteWidget,
                        createWidgetForTopic,
                        saveButton,
                        editWidget}) =>
    <div>
        {
            widgets.map(widget =>
                <i key={widget.id}>
                    <div className="d-flex bd-highlight justify-content-end mb-3">
                        <div className="d-flex align-items-center">
                            <span className="d-flex"><button className="btn btn-success btn-sm" type="submit"
                                                         onClick={() => saveButton(topicId,widget)}>Save</button></span>
                            <button className="d-flex btn btn-dark btn-sm"
                                    onClick={()=>{editWidget(widget); editing=false}}>Preview</button>
                            <button onClick={() => {editWidget(widget); editing=true}}>Edit
                            </button>
                        </div>
                    </div>

                {
                    widget.type === "HEADING" &&
                            <HeadingWidget key={widget.id}
                                           editing={editing}
                                           widget={widget}
                                           editWidget={editWidget}
                                           deleteWidget={deleteWidget}/>
                }
                {   widget.type === "PARAGRAPH" &&
                            <ParagraphWidget key={widget.id}
                                             editing={editing}
                                             widget={widget}
                                             editWidget={editWidget}
                                             deleteWidget={deleteWidget}/>
                }
                </i>
            )
        }
        <i className="fa fa-2x fa-plus-circle float-right" onClick={() => createWidgetForTopic(topicId)}/>
    </div>



// export default WidgetList

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    topicId: state.widgetReducer.topicId
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widgetId) => WidgetService.deleteWidget(widgetId)
        .then(status => dispatch({
            type: "DELETE_WIDGET",widgetId
    })),
    createWidgetForTopic: (topicId) =>
        WidgetService.createWidgetForTopic(topicId, {
            type: "HEADING",
            size: 1
        }).then(widget => dispatch({
            type: "CREAT_WIDGET_FOR_TOPIC",
            widget
        })),

    editWidget: (widget) => WidgetService.updateWidget(widget)
        .then(status => dispatch({
        type: "UPDATE_WIDGET", widget
    })),
    saveButton: (topicId, widget) => WidgetService.updateWidget(widget)
        .then(status => dispatch({
            type: "UPDATE_WIDGET", widget
        }))
})

export default connect
( stateToPropertyMapper, propertyToDispatchMapper)
(WidgetList)