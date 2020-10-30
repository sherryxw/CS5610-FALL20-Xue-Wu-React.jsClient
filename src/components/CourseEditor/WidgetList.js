import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "../widgets/HeadingWidget";
import ParagraphWidget from "../widgets/ParagraphWidget";
import {createWidget, deleteWidget, editWidget, okWidget, updateWidget} from "../../actions/widgetActions";


const WidgetList = ({
                        widgets=[],
                        deleteWidget,
                        createWidget,
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
        <button onClick={createWidget}>Create</button>
    </div>





// export default WidgetList

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

export default connect
( stateToPropertyMapper,
    propertyToDispatchMapper)
(WidgetList)