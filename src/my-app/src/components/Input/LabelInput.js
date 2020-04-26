import React from 'react'
import { FormGroup, Label, Input, FormText } from 'reactstrap'

function randomId () {
    return Math.floor(Math.random()*1000) + 1
}

function LabelInput({ label, id, helpText, type = "text", placeholder, value, disabled, onChangeText, invalid}) {
    const newID = id ? id : randomId()
    const formText = !id ? 'Desenvolvedor, por favor defina o ID do Input.' : helpText

    return (
        <FormGroup style={{ width: '100%' }} >
            <Label for={newID}>{label}</Label>
            
            <Input 
            type={type} 
            id={newID} 
            placeholder={placeholder} 
            value={value} 
            disabled={disabled} 
            onChange={(event) => { onChangeText(event.target.value) }} 
            invalid={invalid}
            />

            {invalid && formText ? <FormText id= {`feedback-${id}`}>{formText} </FormText> : null}
            {!invalid && formText ? <FormText id= {`small-${id}`}>{formText} </FormText> : null}
        </FormGroup>
    )
}

export { LabelInput }