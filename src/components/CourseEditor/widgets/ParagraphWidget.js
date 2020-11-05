import React from "react";


const ParagraphWidget = ({editing, widget, index, length, updateWidget,moveWidgetPos, deleteWidget}) =>
    <div>
        {
            editing &&
            <div>
                <h3>Paragraph Widgets
                    <button className="fa fa-times widget-delete-button float-right" onClick={() => deleteWidget(widget.id)}/>
                    <select className="float-right" value={widget.type} onChange={event => updateWidget({
                        ...widget,
                        type: event.target.value
                    })}>
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="LIST">List</option>
                        <option value="IMAGE">Image</option>
                    </select>
                    {
                        //position up button disappear when the widget is on the top
                        index > 0 &&
                        <button className="fa fa-arrow-up position-button float-right"
                                onClick={() => moveWidgetPos(index, index-1)}/>
                    }
                    {
                        //position down button disappear when the widget is at the bottom
                        index < length - 1 &&
                        <button className="fa fa-arrow-down position-button float-right"
                                onClick={() => moveWidgetPos(index, index + 1)}/>
                    }
                </h3>
                <textarea className="form-control input-field" placeholder="Paragraph Text" value={widget.text || ""}
                       onChange={event => updateWidget({
                           ...widget,
                           text: event.target.value
                       })} />
                <input value={widget.name || ""} placeholder="Paragraph Name" className="form-control input-field"
                       onChange={(event => updateWidget({
                    ...widget,
                    name: event.target.value
                }))}/>

                <h3>Preview</h3>
                <span>{widget.text}</span>
            </div>
        }
        {
            !editing &&
                <span>
                    <h4>---Paragraph Widget---</h4>
                    <h5>{widget.text}</h5>
                </span>

        }
    </div>


export default ParagraphWidget


