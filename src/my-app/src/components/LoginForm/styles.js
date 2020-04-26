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
    height: 30px;
`

export const RecuperarSenha = styled(RouterLink)`
    color: #3F3D56;
    width: 100%;
    font-size: 13px;

    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    margin-bottom: 25px;

    &:hover {
        color: #00B049;
        text-decoration: none;
    }
`
export const DivSwitch = styled.div`
    display: flex;
    color: #3F3D56;
    font-size: 13px;

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
export const Pergunta = styled.div`
    color: #3F3D56;
    width: 100%;
    font-size: 13px;
    font-style: normal;
    font-weight: normal;
    line-height: 27px;
    margin-top: 6px;
`


