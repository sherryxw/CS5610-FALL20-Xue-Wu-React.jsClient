import React from "react";


const WidgetList = ({widgets=[], createWidget, deleteWidget, updateWidget, editWidget, okWidget}) =>
    <div>
        <h1>Widgets</h1>
        <ul>
            {
                widgets.map(widget =>
            <li>
                <button onClick={ () => deleteWidget(widget)}>Delete</button>
                {
                    widget.editing &&
                    <span><input
                        value={widget.name}
                        onChange={(event) => updateWidget({
                            ...widget, //copy the widget
                            name: event.target.value //overwrite the name ----> newName
                        })}/>
                        <button onClick={ () => okWidget(widget)}>OK</button>
                    </span>
                }
                {
                    !widget.editing &&
                    <span>
                        {widget.name}
                        <button onClick={ () => editWidget(widget)}>Edit</button>
                    </span>
                }
            </li>
                )
            }
        </ul>
        <button onClick={createWidget}>Create</button>
    </div>

export default WidgetList


//
// export default class WidgetList extends React.Component {
//     render() {
//         return (
//             <div class="wbdv-light-grey-border">
//                 <h3>Heading Widgets
//                     <a href="#" class="btn btn-warning btn-up">
//                         <i class="fa fa-arrow-up"/>
//                     </a>
//                     <a href="#" class="btn btn-warning btn-down">
//                         <i class="fa fa-arrow-down"/>
//                     </a>
//                     <select>
//                         <option>Heading</option>
//                         <option>YouTube</option>
//                         <option>Slides</option>
//                         <option>List</option>
//                     </select>
//                     <a href="#" class="btn btn-danger btn-trash">
//                         <i class="fa fa-trash"/>
//                     </a>
//                 </h3>
//                 <input class="form-control" placeholder="Heading Text"/>
//
//                 <select class="form-control">
//                     <option>Heading 1</option>
//                     <option>Heading 2</option>
//                     <option>Heading 3</option>
//                     <option>Heading 4</option>
//                     <option>Heading 5</option>
//                 </select>
//
//                 <input class="form-control" placeholder="Widget name"/>
//
//                 <h4>Preview</h4>
//                 <h2>Heading text</h2>
//             </div>
//         );
//     }
//
//}