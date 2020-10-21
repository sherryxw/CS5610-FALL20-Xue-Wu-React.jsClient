import React from "react";
import {connect} from "react-redux";
import moduleService from "../../services/ModuleService"
import {Link} from "react-router-dom";
//initial course as an empty object
let selected_id = "";
const ModuleListComponent = ({course={}, modules=[], moduleId, deleteModule, createModule, updateModule, edit, ok}) =>
    <div>
        <ul className="wbdv-module-item">
            {
                modules.map(module =>
                    <li className={`list-group-item wbdv-module-item-style 
                    ${moduleId === module._id || selected_id===module._id ? 'active' : ''}`}
                        key={module._id}>
                        {
                            !module.editing &&
                            <span>
                                <Link to={`/edit/course/${course._id}/modules/${module._id}`} className="link">
                                    {module.title}
                                </Link>
                                <i className="fa fa-pencil pull-right"
                                   onClick={() => {edit(module); selected_id=module._id}
                                   }

                                />
                            </span>
                        }
                        {
                            module.editing &&
                            <span>
                                <input onChange={(event) => updateModule({
                                    ...module,
                                    title: event.target.value
                                })}
                                       value={module.title}/>
                                <i className="fa fa-trash pull-right"
                                   onClick={() => deleteModule(module)}/>
                                <i className="fa fa-check pull-right"
                                   onClick={() => {ok(module); selected_id=""}}>
                                </i>
                            </span>
                        }
                    </li>

                )
            }
        </ul>
        <i className="fa fa-plus fa-2x pull-right module-plus"
           onClick={() => createModule(course)}>
        </i>
    </div>




const propertyToDispatchMapper = (dispatch) => ({
    ok: (module) =>
        moduleService.updateModule(module._id, {
            ...module, editing: false
        }).then(status => dispatch({
            type: "UPDATE_MODULE",
            module: {...module, editing: false}
        })),
    edit: (module) =>
        moduleService.updateModule(module._id, {
            ...module, editing: true
        }).then(status => dispatch({
            type: "UPDATE_MODULE",
            module: {...module, editing: true}
        })),
    deleteModule: (module) =>
        moduleService.deleteModule(module._id)
            .then(status => dispatch({
                type: "DELETE_MODULE",
                module: module
            })),
    createModule: (course) =>
        moduleService.createModule(course._id, {
            title: "New Module"
        }).then(actualModule => dispatch({
            type: "CREATE_MODULE",
            module: actualModule
        })),
    updateModule: (module) =>
        //[option 1]only dispatch to reducer, not server
        dispatch({
            type: "UPDATE_MODULE",
            module: module
        }),
    // [option 2]goes to the server
    // moduleService.updateModule(module._id, module)
    //   .then(status => dispatch({
    //     type: "UPDATE_MODULE",
    //     module: module
    //   }))
})

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course
})

//extract the modules from state, parses the state, and then parses the dispatch
export default connect(stateToPropertyMapper, propertyToDispatchMapper)(ModuleListComponent)