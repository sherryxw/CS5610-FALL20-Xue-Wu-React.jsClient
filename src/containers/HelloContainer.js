import React from "react";
import {connect} from "react-redux";
import Hello from "../components/Hello"

const stateMapper = state => ({
    message: state.fsm.communications.msg
})


//connect generate the property that fed into the Hello
//provider---->send all the component through state function
//map the state to property, extract the val gives to message
export default connect(stateMapper)(Hello)