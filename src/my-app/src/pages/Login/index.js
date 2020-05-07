import React from 'react'

import { useVerifyAuthentication } from '../../routes'
import { Blank } from '../../components/Page/Blank'
import { LoginForm } from '../../components/LoginForm'

import { TopRightCircle, BottomRightCircle, LeftCircle, Container } from './styles'

function Login() {
    useVerifyAuthentication()

    return (
        <Blank>
            <Container>
                <TopRightCircle src={`${process.env.PUBLIC_URL}/assets/images/Login-circle-top-right.svg`}
                    alt="Circle Top Right"
                />

                <BottomRightCircle src={`${process.env.PUBLIC_URL}/assets/images/Login-circle-bottom-right.svg`}
                    alt="Circle Bottom Right"
                />

                <LeftCircle src={`${process.env.PUBLIC_URL}/assets/images/Login-circle-left.svg`}
                    alt="Circle Left"
                />

                <LoginForm />
            </Container>
        </Blank>
    )
}

export { Login }