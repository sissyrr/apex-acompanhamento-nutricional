import React from 'react'

import { WithLogo } from '../../components/Page/WithLogo'
import { NutriRegister } from '../../components/NutriRegister'
import { Container } from './styles'

function CreateAccount() {
    return (
        <WithLogo>
            <Container>
            <NutriRegister />
            </Container>
        </WithLogo>
    )
}

export { CreateAccount }