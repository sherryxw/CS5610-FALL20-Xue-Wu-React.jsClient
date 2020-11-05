import React from "react";

const ImageWidget = ({editing, widget, index, length, updateWidget,moveWidgetPos, deleteWidget}) => (
    <div>
        {
            editing &&
            <div>
                <h3>Image Widgets
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
                <input placeholder="Image URL" className="form-control input-field" value={widget.src || ""}
                       onChange={(event => updateWidget({
                           ...widget,
                           src: event.target.value
                       }))}/>
                <input placeholder="Widget name" className="form-control input-field" value={widget.name || ""}
                       onChange={(event => updateWidget({
                    ...widget,
                    name: event.target.value
                }))}/>
                <h3>Preview</h3>
                <img className="card-img-bottom"
                     src={widget.src}/>
            </div>
        }
        {
            ! editing &&
            <span>
                <h4>---Image Widget---</h4>
                <img className="card-img-bottom" src={widget.src}/>
            </span>
        }

    </div>

)





export default ImageWidget;