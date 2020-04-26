import React from 'react'

import { WithLogo } from '../../components/Page/WithLogo'
import { FaUserLock } from 'react-icons/fa';

import { RightCircle, LoginButton, BottomLeftCircle, TextoPrincipal, TituloHotsite, SubtituloHotsite, CadastroButton, HotsiteImage } from './styles'

function Hotsite() {
    return (
        <WithLogo>
            <RightCircle>
                <img src={`${process.env.PUBLIC_URL}/assets/images/Hotsite-circle-right.svg`}
                    alt="Circle right"
                />

                <LoginButton to="/login" outlined >
                    <FaUserLock />
                    <span style={{ margin: '0 10px' }}>ENTRAR</span>
                </LoginButton>
            </RightCircle>

            <BottomLeftCircle src={`${process.env.PUBLIC_URL}/assets/images/Hotsite-circle-bottom-left.svg`}
                alt="Circle Bottom Left"
            />

            <TextoPrincipal>
                <TituloHotsite>Acompanhamento Nutricional Personalizado</TituloHotsite>
                <SubtituloHotsite>Melhore a sua saúde e seu bem estar sem sair de casa!</SubtituloHotsite>
                <CadastroButton to="/create-account">CADASTRE-SE</CadastroButton>
            </TextoPrincipal>

            <HotsiteImage src={`${process.env.PUBLIC_URL}/assets/images/Hotsite-image.svg`}
                alt="Hotsite Image"
            />

        </WithLogo>
    )

}

export { Hotsite }