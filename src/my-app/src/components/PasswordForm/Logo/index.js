import React from 'react'

import { LogoNutriPassword } from './styles'

function Logo() {
    return <LogoNutriPassword src={`${process.env.PUBLIC_URL}/assets/images/Login-logo-2.svg`}
    alt="Nutrilife" /> 
}

export { Logo }