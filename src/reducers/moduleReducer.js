const initialState = {
    modules: []
}

const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case "DELETE_MODULE":
            return {
                ...state,
                //if different will keep it, otherwise filter out
                modules: state.modules.filter(module => module._id !== action.module._id)
            }

        case "CREATE_MODULE":
            return {
                ...state,
                modules: [
                    ...state.modules, //old modules
                    action.module   //append the new module
                ]
            }
        case "UPDATE_MODULE":
            return {
                ...state,
                modules: state.modules.map(module => module._id === action.module._id ? action.module : module)
            }

        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules,
            }

        default:
            return state
    }
}

export default moduleReducer