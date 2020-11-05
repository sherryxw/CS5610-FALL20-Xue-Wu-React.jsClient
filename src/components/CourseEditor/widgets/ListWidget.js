import React from "react";

const ListWidget = ({editing, widget, index, length, updateWidget,moveWidgetPos, deleteWidget}) => (
    <div>
        {
            editing &&
            <div>
                <h3>List Widgets
                    <button className="fa fa-times widget-delete-button float-right button-margin"
                            onClick={() => deleteWidget(widget.id)}/>
                    <select className="float-right" value={widget.type}
                            onChange={(event) => updateWidget({
                                ...widget, type: event.target.value})}>
                        <option value="HEADING">Heading</option>
                        <option value="LIST">List</option>
                        <option value="PARAGRAPH">Paragraph</option>
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
                <textarea className="form-control input-field" placeholder="Enter one list item per line"
                          value={widget.text || ""}
                          onChange={event => updateWidget({
                              ...widget,
                              text: event.target.value
                          })} />
                <select className="form-control input-field" value={widget.style || "UNORDERED"}
                        id={`listWidgetStyle${widget.id}`}
                        onChange={(event) => updateWidget({
                            ...widget,
                            style: event.target.value
                        })}>
                    <option value="UNORDERED">Unordered List</option>
                    <option value="ORDERED">Ordered List</option>
                </select>

                <h3>Preview</h3>
                {
                    widget.style === "UNORDERED" &&
                        <ul>
                            {widget.text.split('\n').map(line => <li key={`singleLine${line}`}>{line}</li>)}
                        </ul>
                }
                {
                    widget.style === "ORDERED" &&
                    <ol>
                        {widget.text.split('\n').map(line => <li key={`singleLine${line}`}>{line}</li>)}
                    </ol>
                }


            </div>
        }
        {
            ! editing &&
            <span>
                    <h4>---List Widget---</h4>
                {
                    widget.style === "UNORDERED" &&
                    <ul>
                        {widget.text.split('\n').map(line => <li key={`singleLine${line}`}>{line}</li>)}
                    </ul>
                }
                {
                    widget.style === "ORDERED" &&
                    <ol>
                        {widget.text.split('\n').map(line => <li key={`singleLine${line}`}>{line}</li>)}
                    </ol>
                }
            </span>
        }

    </div>

)





export default ListWidget;