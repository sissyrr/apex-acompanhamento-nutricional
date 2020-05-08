import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { Button } from '../Button'



export const Container = styled.div`
    display: flex;
    align-items: center;

    -webkit-box-shadow: 0px 8px 16px -11px rgba(0,0,0,0.44);
    -moz-box-shadow: 0px 8px 16px -11px rgba(0,0,0,0.44);
    box-shadow: 0px 8px 16px -11px rgba(0,0,0,0.44);
`

export const LogoNav = styled.img`
    padding: 15px;
    width: 160px;
`
export const ListaNav = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0px;

    display: flex;
    flex-direction: row;
    align-items: center;
`
export const LiNav = styled.li`
    list-style-type: none;
    margin: 0;
    padding: 0px;

    display: flex;
    flex-direction: row;
    align-items: center;
`

export const LinkNav = styled(Link)`
    padding: 20px;
    color: #3F3D56;

    font-size: 15px;
    width: max-content;

    display: flex;
    align-items: center;
    justify-content: center;


    &:hover {
        color: #00B049;
        text-decoration: none;
    }

    > svg {
        font-size: 20px;
        margin: 10px;
        margin-left: 0;
    }

`
export const Sair = styled(Button)`
    padding: 20px;
    color: #D3D3D3;

    font-size: 15px;
    font-weight: 400;
    width: max-content;

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;


    &:hover {
        color: #00B049;
        text-decoration: none;
    }

    > svg {
        font-size: 20px;
        margin: 10px;
        margin-left: 0;
    }

`
export const User = styled.text`
    padding: 20px;

    font-size: 15px;
    width: max-content;

    display: flex;
    align-items: center;
    justify-content: center;

`

export const TraçoVertical = styled.div`
    height: 20px;
    border-left: 1px solid #E0E0E0;
    box-sizing: border-box;
`
export const Div = styled.div`
    width: 100%;
`
export const Avatar = styled.img`
    width: 40px;
    border: 1px solid #00B049;
    border-radius: 50%;
`