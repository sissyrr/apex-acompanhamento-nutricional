import React from 'react'

import { LogoImg } from './styles'

function LogoNutrilife() {
    return (
        <div>
            <LogoImg src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                alt="Logo Nutrilife"
            />
            <img src={`${process.env.PUBLIC_URL}/assets/images/circle.png`}
                alt="Circle around logo"
            />
        </div>
    )
}

export { LogoNutrilife }