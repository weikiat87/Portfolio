import React from 'react'
import PropTypes from 'prop-types'
import { Typed } from "typed.js";


function TypedComponent(props) {
    return (
        <div>
            
        </div>
    )
}

TypedComponent.propTypes = {
    string: PropTypes.string.isRequired,
    startTime: PropTypes.number.isRequired,
}

export default TypedComponent

