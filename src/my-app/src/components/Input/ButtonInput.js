import React from 'react'
import { InputGroup, Input, Label, InputGroupAddon } from 'reactstrap'

import { ButtonInputContainer } from './styles'

import { Button } from '../Button'

function randomId() {
    return Math.floor(Math.random() * 1000) + 1
}

function ButtonInput({ label, id, type = "text", placeholder, left, right, onPress, onChangeText, value}) {
    const newID = id ? id : randomId()

    function removeBorderRadius() {
        return left
            ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
            : { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
    }

    return (
        <ButtonInputContainer>
            {label && <Label for={newID}>{label}</Label>}

            <InputGroup>
                {left && (
                    <InputGroupAddon addonType="prepend">
                        <Button
                            outlined
                            style={{ padding: '5px' }}
                            type="button"
                            onClick={onPress}
                        >
                            {left}
                        </Button>
                    </InputGroupAddon>
                )}

                <Input id={newID} placeholder={placeholder} style={removeBorderRadius()} onChange={(event) => { onChangeText(event.target.value) }} value={value}/>

                {right && (
                    <InputGroupAddon addonType="apend">
                        <Button
                            outlined
                            style={{ padding: '5px' }}
                            onClick={onPress}
                            type="button"
                        >
                            {right}
                        </Button>
                    </InputGroupAddon>
                )}
            </InputGroup>
        </ButtonInputContainer>

    )
}

export { ButtonInput }