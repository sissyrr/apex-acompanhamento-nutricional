import React from 'react'
import { FormGroup, Label, Input, FormText } from 'reactstrap'

function randomId () {
    return Math.floor(Math.random()*1000) + 1
}

function LabelInput({ label = "Sem label", id, helpText, type = "text" }) {
    const newID = id ? id : randomId()
    const formText = !id ? 'Desenvolvedor, por favor defina o ID do Input.' : helpText

    return (
        <FormGroup>
            <Label for={newID}>{label}</Label>
            <Input type={type} id={newID} />

            {formText ? <FormText id= {`small-${id}`}>{formText} </FormText> : null}
        </FormGroup>
    )
}

export { LabelInput }