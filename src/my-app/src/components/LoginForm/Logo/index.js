import React from 'react'

import { LogoMenor } from './styles'

function Logo() {
    return <LogoMenor src={`${process.env.PUBLIC_URL}/assets/images/Login-logo.svg`}
    alt="Bem vindo ao Nutrilife" /> 
}

export { Logo }