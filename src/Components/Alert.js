import React from 'react';
import "./Comp.css"

const Alert = (props) => {
    return (
    props.alert && 
    <div>
        <div class="alert alert-success" role="alert"> <strong>{props.alert.type}:</strong> {props.alert.message}</div>
    </div>
    );
}



export default Alert;