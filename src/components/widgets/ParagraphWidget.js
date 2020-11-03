import React from "react";


const ParagraphWidget = ({editing, widget, updateWidget,deleteWidget}) =>
    <div>
        {
            editing &&
            <div>
                <h3>Paragraph Widgets
                    <button className="fa fa-times float-right" onClick={() => deleteWidget(widget.id)}/>
                    <select className="float-right" value={widget.type} onChange={event => updateWidget({
                        ...widget,
                        type: event.target.value
                    })}>
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                    </select>
                    <button className="fa fa-arrow-down float-right"/>
                    <button className="fa fa-arrow-up float-right"/>
                </h3>
                <input className="form-control" placeholder="Paragraph Text" value={widget.text || ""}
                       onChange={event => updateWidget({
                           ...widget,
                           text: event.target.value
                       })} />
                <input value={widget.name || ""} placeholder="Paragraph Name" className="form-control"
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
            <h1>{widget.text}</h1>
        }
    </div>


export default ParagraphWidget


