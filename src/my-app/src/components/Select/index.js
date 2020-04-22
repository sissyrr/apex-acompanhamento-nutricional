import React from 'react'
import { Input, Label } from 'reactstrap'

import { Container } from './styles.js'

function Select({ label, options = [], id, onSelect = () => { } }) {
    return (
        <Container>
            <Label>{label}</Label>
            <Input type="select" name={id} id={id} onChange={(event) => { onSelect(event.target.value) }}>
                <option value="">Selecione</option>
                {options.map((option) => {
                    return <option value={option.value}>{option.text}</option>
                })}
            </Input>
        </Container>
    )
}

export { Select }