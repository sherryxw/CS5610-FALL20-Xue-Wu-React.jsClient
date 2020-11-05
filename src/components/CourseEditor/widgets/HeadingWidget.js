import React from "react";



const HeadingWidget = ({editing, index, length, widget, moveWidgetPos,updateWidget, deleteWidget}) => (
    <div>
        {
            editing &&
            <div>
                <h3>Heading Widgets
                    <button className="fa fa-times widget-delete-button float-right button-margin"
                            onClick={() => deleteWidget(widget.id)}/>
                    <select className="float-right" value={widget.type}
                            onChange={(event) => updateWidget({
                            ...widget, type: event.target.value})}>
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="LIST">List</option>
                        <option value="IMAGE">Image</option>
                    </select>
                    {
                        //position down button disappear when the widget is at the bottom
                        index < length - 1 &&
                        <button className="fa fa-arrow-down position-button float-right"
                                onClick={() => moveWidgetPos(index, index + 1)}/>
                    }
                    {
                        //position up button disappear when the widget is on the top
                        index > 0 &&
                        <button className="fa fa-arrow-up position-button float-right"
                                onClick={() => moveWidgetPos(index, index-1)}/>
                    }
                </h3>
                <input className="form-control input-field" placeholder="Heading Text" value={widget.text || ""}
                       id={`headingWidgetText${widget.id}`} onChange={(event) => updateWidget({
                    ...widget,
                    text: event.target.value
                })} />
                <select className="form-control input-field" value={widget.size} id={`headingWidgetSize${widget.id}`}
                        onChange={(event) => updateWidget({
                    ...widget,
                    size: parseInt(event.target.value)
                })}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                    <option value="4">Heading 4</option>
                    <option value="5">Heading 5</option>
                    <option value="6">Heading 6</option>
                </select>
                <input value={widget.name || ""} placeholder="Name" className="form-control input-field"
                       id={`headingWidgetName${widget.id}`}
                       onChange={(event => updateWidget({
                    ...widget,
                    name: event.target.value
                }))}/>
                <h3>Preview</h3>
                <span>
                    {widget.size === 1 && <h1>{widget.text}</h1>}
                    {widget.size === 2 && <h2>{widget.text}</h2>}
                    {widget.size === 3 && <h3>{widget.text}</h3>}
                    {widget.size === 4 && <h4>{widget.text}</h4>}
                    {widget.size === 5 && <h5>{widget.text}</h5>}
                    {widget.size === 6 && <h6>{widget.text}</h6>}
                </span>

            </div>
        }
        {
            ! editing &&
            <span>
                <h4>---Heading Widget---</h4>
                {widget.size === 1 && <h1>{widget.text}</h1>}
                {widget.size === 2 && <h2>{widget.text}</h2>}
                {widget.size === 3 && <h3>{widget.text}</h3>}
                {widget.size === 4 && <h4>{widget.text}</h4>}
                {widget.size === 5 && <h5>{widget.text}</h5>}
                {widget.size === 6 && <h6>{widget.text}</h6>}
            </span>
        }
    </div>
)


export default HeadingWidget



