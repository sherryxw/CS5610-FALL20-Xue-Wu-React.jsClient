import React from "react";
import HeadingWidget from "./HeadingWidget";
import {updateWidget} from "../../actions/widgetActions";


const ParagraphWidget = (widget, deleteWidget, editWidget, okWidget) =>
    <div>
        <div className="d-flex bd-highlight justify-content-end mb-3">
            <div className="d-flex align-items-center">
                <span className="d-flex">
                    <button className="btn btn-success btn-sm" type="submit" onClick={() => okWidget(widget)}>Save</button></span>
                <span className="d-flex"><a className="nav-link pre" href="#">Preview</a></span>
                <span className="custom-control custom-switch" onClick={() => editWidget(widget)}>
                            <input type="checkbox" className="custom-control-input" id="customSwitches"/>
                                <label className="custom-control-label" htmlFor="customSwitches"/>
                        </span>
            </div>
        </div>

        {
            widget.editing &&
            <div>
                <h3>Paragraph Widgets
                    <button className="fa fa-times float-right" onClick={() => deleteWidget(widget)}/>
                    <select className="float-right">
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                    </select>
                    <button className="fa fa-arrow-down float-right"/>
                    <button className="fa fa-arrow-up float-right"/>
                </h3>
                <input className="form-control" placeholder="Paragraph Text"
                       onChange={(event) => updateWidget({
                           ...widget,
                           text: event.target.value
                       })} value={widget.name}/>
                <input value={widget.name} placeholder="Widget Name" className="form-control" onChange={(event => updateWidget({
                    ...widget,
                    name: event.target.value
                }))}/>

                <h3>Preview</h3>
                <span>{widget.text}</span>
            </div>
        }
        {
            !widget.editing &&
            <div>
                <h3>{widget.type}</h3>
                <li>Name: {widget.name}</li>
                <li>Type: {widget.id}</li>
            </div>
        }
    </div>


export default ParagraphWidget


