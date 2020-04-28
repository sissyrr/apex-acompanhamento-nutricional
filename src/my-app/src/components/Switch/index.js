import React from 'react'

import { StyledSwitch } from './styles'

function randomId () {
    return Math.floor(Math.random()*1000) + 1
}

function Switch({ type="switch", label, id, name, ...rest}) {
    const newID = id ? id : randomId()
    const newName = name ? newID : randomId()
    return (
        <StyledSwitch
        type={type}
        label="Sou uma nutricionista"
        id={newID}
        name={newName} 
        {...rest}
        />
    )
}


// import { CustomInput } from 'reactstrap';

// function randomId () {
//     return Math.floor(Math.random()*1000) + 1
// }

// function Switch({type="switch", id, label}) {
//     const newID = id ? id : randomId()

//     return (
//         <CustomInput 
//         type={type}
//         id={newID}
//         label={label} 
//         />
//     )
// }

export { Switch }