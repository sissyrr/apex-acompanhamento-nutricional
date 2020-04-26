import styled from 'styled-components'

import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const Form = styled.form``

export const Space = styled.div`
    height: 20px;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
export const Cadastro = styled(RouterLink)`
    color: #3F3D56;
    width: 100%;
    font-size: 13px;
    text-decoration: underline;
    font-style: normal;
    font-weight: normal;
    line-height: 27px;

    &:hover {
        color: #00B049;
        text-decoration: underline;
    }
`
export const Titulo = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 63px
`
export const Subtitulo = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 42px;
`