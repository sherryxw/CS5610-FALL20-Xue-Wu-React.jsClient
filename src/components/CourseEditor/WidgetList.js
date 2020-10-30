import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "../widgets/HeadingWidget";
import ParagraphWidget from "../widgets/ParagraphWidget";
import {createWidget, deleteWidget, editWidget, okWidget, updateWidget} from "../../actions/widgetActions";
import WidgetService from "../../services/WidgetService";


const WidgetList = ({
                        widgets=[],
                        topicId,
                        deleteWidget,
                        createWidgetForTopic,
                        editWidget,
                        okWidget}) =>
    <div>
        {
            widgets.map(widget =>
                    <i key={widget.id}>
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget widget={widget}
                                               deleteWidget={deleteWidget}
                                               editWidget={editWidget}
                                               okWidget={okWidget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget widget={widget}
                                                 deleteWidget={deleteWidget}
                                                 editWidget={editWidget}
                                                 okWidget={okWidget}/>
                            }
                    </i>
                )
            }
        <button onClick={() => createWidgetForTopic(topicId)}>Create</button>
    </div>





// export default WidgetList

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    topicId: state.widgetReducer.topicId
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widget) => deleteWidget(dispatch, widget),
    createWidgetForTopic: (topicId) =>
        WidgetService.createWidgetForTopic(topicId, {
            name: "NEW WIDGET",
            type: "PARAGRAPH"
        }).then(widget => dispatch({
            type: "CREAT_WIDGET_FOR_TOPIC",
            widget
        })),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    editWidget: (widget) => editWidget(dispatch, widget),
    okWidget: (widget) => okWidget(dispatch, widget)
})

export default connect
( stateToPropertyMapper,
    propertyToDispatchMapper)
(WidgetList)