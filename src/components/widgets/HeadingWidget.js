import React from "react";

const HeadingWidget = (
    {
        editing, widget,deleteWidget, editWidget, okWidget
    }) => (
    <div>
        {
            editing &&
            <div>
                <h3>Heading Widgets
                    <button className="fa fa-times float-right" onClick={() => deleteWidget(widget)}/>
                    <select className="float-right" value={widget.type} onChange={event => editWidget({
                        ...widget,
                        type: event.target.value
                    })}>
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                    </select>
                    <button className="fa fa-arrow-down float-right"/>
                    <button className="fa fa-arrow-up float-right"/>
                </h3>
                <input className="form-control" placeholder="Heading Text" value={widget.text}
                onChange={(event) => editWidget({
                    ...widget,
                    text: event.target.value
                })} />
                <select className="form-control" value={widget.size} onChange={(event) =>
                    editWidget({
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
                <input value={widget.name} placeholder="Name" className="form-control" onChange={(event => editWidget({
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
                <span>Heading Widget</span>
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



