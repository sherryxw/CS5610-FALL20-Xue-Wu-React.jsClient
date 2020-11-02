import React from "react";


const ParagraphWidget = (editing,widget, editWidget,deleteWidget) =>
    <div>
        {
            editing === true &&
            <div>
                <h3>Paragraph Widgets
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
                <input className="form-control" placeholder="Paragraph Text"
                       onChange={(event) => editWidget({
                           ...widget,
                           text: event.target.value
                       })} value={widget.text}/>
                <input value={widget.name} type="text" placeholder="Widget Name" className="form-control"
                       onChange={(event => editWidget({
                    ...widget,
                    name: event.target.value
                }))}/>

                <h3>Preview</h3>
                <span>{widget.text}</span>
            </div>
        }
        {
            editing === false &&
            <span>
                Title: {widget.title}
            </span>
        }
    </div>


export default ParagraphWidget


