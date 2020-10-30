import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "../widgets/HeadingWidget";
import ParagraphWidget from "../widgets/ParagraphWidget";
import {createWidget, deleteWidget, editWidget, okWidget, updateWidget} from "../../actions/widgetActions";



const WidgetList = ({
                        widgets=[],
                        deleteWidget,
                        createWidget,
                        updateWidget,
                        editWidget,
                        okWidget}) =>
    <div>
        <h1>Widgets!!!</h1>
        <ul>
            {
                widgets.map(widget =>
                        <li key={widget.id}>
                            {JSON.stringify(widget)}
                            <button
                                onClick={() => deleteWidget(widget)}>
                                Delete
                            </button>
                {/*            {*/}
                {/*                widget.editing &&*/}
                {/*                <span><input*/}
                {/*                    onChange={(event) => updateWidget({*/}
                {/*                        ...widget,*/}
                {/*                        name: event.target.value*/}
                {/*                    })}*/}
                {/*                    value={widget.name}/>*/}
                {/*<button onClick={() => okWidget(widget)}>*/}
                {/*  Ok*/}
                {/*</button>*/}
                {/*</span>*/}
                {/*            }*/}

                                    {
                                        widget.type === "HEADING" &&
                                        <HeadingWidget/>
                                    }
                                    {
                                        widget.type === "PARAGRAPH" &&
                                        <ParagraphWidget/>
                                    }
                                    <button onClick={() => editWidget(widget)}>
                    Edit
                  </button>
                {/*</span>*/}
                            }
                        </li>
                )
            }
        </ul>
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