import React from 'react'

import { WithLogo } from '../../components/Page/WithLogo'
import { PasswordForm } from '../../components/PasswordForm'

import { TopRightCircle, BottomRightCircle, LeftCircle, Container } from './styles'

function ForgotPassword() {
    return (
        <WithLogo>
            <Container>
                <TopRightCircle src={`${process.env.PUBLIC_URL}/assets/images/Login-circle-top-right.svg`}
                    alt="Circle Top Right"
                />

                <BottomRightCircle src={`${process.env.PUBLIC_URL}/assets/images/Login-circle-bottom-right.svg`}
                    alt="Circle Bottom Right"
                />

                

                <PasswordForm />

            </Container>
        </WithLogo>
    )
}

export { ForgotPassword }