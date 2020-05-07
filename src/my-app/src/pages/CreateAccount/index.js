import React from 'react'
import { useVerifyAuthentication } from '../../routes'
import { WithLogo } from '../../components/Page/WithLogo'
import { NutriRegister } from '../../components/NutriRegister'
import { Container } from './styles'

function CreateAccount() {
    useVerifyAuthentication()
    return (
        <WithLogo>
            <Container>
            <NutriRegister />
            </Container>
        </WithLogo>
    )
}

export { CreateAccount }