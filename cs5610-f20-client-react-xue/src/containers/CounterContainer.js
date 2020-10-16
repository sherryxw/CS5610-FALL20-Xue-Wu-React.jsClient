import React from "react";
import {connect} from "react-redux";
import Counter from "../components/Counter";


//map from the state to the property
const stateToPropertyMapper = (state) => ({
    count: state.fsm.count
})


//map from the property to the dispatcher(function)
const propertyToDispatchMapper = (dispatch) => ({
    //up is a function being invoked, dispatch an event or action
    //dispatch will invoke the case type
    up: () => dispatch({type: "UP"}),
    down: () => dispatch({type: "DOWN"})
})


export default connect(stateToPropertyMapper, propertyToDispatchMapper)(Counter)
