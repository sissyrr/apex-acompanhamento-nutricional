import React from 'react'
import { InputGroup, Label, Input} from 'reactstrap'

import { IconInputContainer, GroupAddon, StyledInput, StyledGroupAddon } from './styles'

function randomId() {
    return Math.floor(Math.random() * 1000) + 1
}

function IconInput({ label, id, type = "text", placeholder, left, right, value, onChangeText}) {
    const newID = id ? id : randomId()
    if (type === 'text') {
        return (
            <IconInputContainer>
                {label && <Label for={newID}>{label}</Label>}
    
                <InputGroup>
                    {left && (
                        <GroupAddon addonType="prepend" >
                            {left}
                        </GroupAddon>
                    )}
    
                    <Input type={type} id={newID} placeholder={placeholder} value={value} onChange={(event) => { onChangeText(event.target.value) }} />
                    
                    {right && (
                        <GroupAddon addonType="apend">
                            {right}
                        </GroupAddon>
                    )}
                </InputGroup>
            </IconInputContainer>
        )
    }

    return (
        <IconInputContainer>
            {label && <Label for={newID}>{label}</Label>}

            <InputGroup>
                {left && (
                    <StyledGroupAddon addonType="prepend" >
                        {left}
                    </StyledGroupAddon>
                )}

                <StyledInput type={type} id={newID} value={value} placeholder={placeholder} onChange={(event) => { onChangeText(event.target.value) }} />
                
                {right && (
                    <StyledGroupAddon addonType="apend">
                        {right}
                    </StyledGroupAddon>
                )}
            </InputGroup>
        </IconInputContainer>
    )

    
}

export { IconInput }