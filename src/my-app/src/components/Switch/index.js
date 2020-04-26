import React from 'react'
import { CustomInput } from 'reactstrap';

function randomId () {
    return Math.floor(Math.random()*1000) + 1
}

function Switch({type="switch", id, label}) {
    const newID = id ? id : randomId()

    return (
        <CustomInput 
        type={type}
        id={newID}
        label={label} 
        />
    )
}

export { Switch }