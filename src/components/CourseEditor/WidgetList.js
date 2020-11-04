import React, {useState} from "react";
import {connect} from "react-redux";
import HeadingWidget from "../widgets/HeadingWidget";
import ParagraphWidget from "../widgets/ParagraphWidget";
import WidgetService from "../../services/WidgetService";

const WidgetList = ({
                        widgets=[],
                        topicId,
                        createWidgetForTopic,
                        saveButton,
                        updateWidget,
                        moveWidgetPos,
                        deleteWidget}) => {
    const [editing, setEditing] = useState(false)
    const toggle = () => {
        setEditing(!editing)
    }

    return <div>
        {
            topicId &&
            <div className="d-flex bd-highlight justify-content-end mb-3">
                <div className="d-flex align-items-center">
                    <button className="button-margin btn btn-success " onClick={() => saveButton(topicId, widgets)}>Save</button>
                    <div className="custom-control custom-switch d-inline-block">
                        <input type="checkbox" className="custom-control-input"
                               id="customSwitches" onClick={toggle}/>
                        <label className="custom-control-label preview"
                               htmlFor="customSwitches"><strong>Preview</strong></label>
                    </div>
                </div>
            </div>
        }

        {
            widgets.map((widget, index) =>
                <i key={widget.id}>
                    {
                        widget.type === "HEADING" &&
                        <HeadingWidget key={widget.id}
                                       index={index}
                                       editing={editing}
                                       length={widgets.length}
                                       widget={widget}
                                       moveWidgetPos={moveWidgetPos}
                                       deleteWidget={deleteWidget}
                                       updateWidget={updateWidget}/>
                    }
                    {widget.type === "PARAGRAPH" &&
                    <ParagraphWidget key={widget.id}
                                     index={index}
                                     editing={editing}
                                     length={widgets.length}
                                     widget={widget}
                                     moveWidgetPos={moveWidgetPos}
                                     deleteWidget={deleteWidget}
                                     updateWidget={updateWidget}/>
                    }
                </i>
            )
        }
        {
            topicId &&
            <i className="fa fa-2x fa-plus-circle float-right add-widget-button" onClick={() => createWidgetForTopic(topicId)}/>
        }
    </div>
}



const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    topicId: state.widgetReducer.topicId
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widgetId) => dispatch({
            type: "DELETE_WIDGET",widgetId
    }),
    createWidgetForTopic: (topicId) =>
        WidgetService.createWidgetForTopic(topicId, {
            type: "HEADING",
            size: 1
        }).then(widget => dispatch({
            type: "CREAT_WIDGET_FOR_TOPIC",
            widget
        })),
    saveButton: (topicId, widgets) => WidgetService.updateWidgetForTopic(topicId, widgets),
    updateWidget: (widget) => dispatch({
            type: "UPDATE_WIDGET", widget
        }),
    moveWidgetPos: (fromPos, toPos) => dispatch({type: "MOVE_POSITION", fromPos, toPos})
})


export default connect
( stateToPropertyMapper, propertyToDispatchMapper)
(WidgetList)