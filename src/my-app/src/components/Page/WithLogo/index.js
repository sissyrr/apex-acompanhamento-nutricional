import React from 'react'

import { Container } from './styles'

import { LogoNutrilife } from '../../LogoNutrilife'

function WithLogo({ children }) {
    return (
        <Container>
            <LogoNutrilife />
            {children}
        </Container>
    )
}

export { WithLogo } 