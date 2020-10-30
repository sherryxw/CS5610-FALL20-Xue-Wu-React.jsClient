import React from "react";
import {updateWidget} from "../../actions/widgetActions";

const HeadingWidget = (
    {
        widget, deleteWidget, editWidget, okWidget
    }) => (
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
        {widget.editing=true}
        {
            widget.editing &&
            <div>
                <h3>Heading Widgets
                    <button className="fa fa-times float-right" onClick={() => deleteWidget(widget)}/>
                    <select className="float-right">
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                    </select>
                    <button className="fa fa-arrow-down float-right"/>
                    <button className="fa fa-arrow-up float-right"/>
                </h3>
                <input className="form-control" placeholder="Heading Text"
                onChange={(event) => updateWidget({
                    ...widget,
                    text: event.target.value
                })} value={widget.name}/>
                <select className="form-control" onChange={(event) => updateWidget({
                    ...widget,
                    size: event.target.value
                })}>
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                </select>
                <input value={widget.name} placeholder="Name" className="form-control" onChange={(event => updateWidget({
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
                {
                    widget.size === 1 &&
                    <h1>{widget.text}</h1>
                }
                {
                    widget.size === 2 &&
                    <h2>{widget.text}</h2>
                }
                {
                    widget.size === 3 &&
                    <h3>{widget.text}</h3>
                }
                <li>{widget.name}</li>
                <li>{widget.type}</li>
            </div>
        }
    </div>
)


export default HeadingWidget



