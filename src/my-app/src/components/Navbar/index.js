import React from 'react'

import { FiLogOut } from 'react-icons/fi'
import { FaPencilAlt, FaMoneyCheckAlt } from 'react-icons/fa'
import { MdDashboard, MdPeople } from 'react-icons/md'

import { useHistory } from 'react-router-dom'

import { Container, LogoNav, ListaNav, LiNav, LinkNav, TraçoVertical, Div, Avatar, Sair, User } from './styles'

function Navbar() {
    const history = useHistory()

    function signOut (e) {
        e.preventDefault()
        localStorage.clear();
        history.push('/')
    }

    return <Container>

        <LogoNav src={`${process.env.PUBLIC_URL}/assets/images/Login-logo-2.svg`}
            alt="Nutrilife" />

        <ListaNav>
            <LiNav>
                <LinkNav
                    href="/dashboard">
                    <MdDashboard />
                   Dashboard
             </LinkNav>
            </LiNav>

            <TraçoVertical />

            <LiNav>
                <LinkNav
                    href="/pacientes">
                    <MdPeople />
                     Pacientes
             </LinkNav>
            </LiNav>

            <TraçoVertical />

            <LiNav>
                <LinkNav
                    href="/cardapio">
                    <FaPencilAlt />
                     Cardápio
             </LinkNav>
            </LiNav>

            <TraçoVertical />

            <LiNav>
                <LinkNav
                    href="/financeiro">
                    <FaMoneyCheckAlt />
                     Financeiro
             </LinkNav>
            </LiNav>

        </ListaNav>

        <Div />

        <ListaNav>
            <Avatar src={`${process.env.PUBLIC_URL}/assets/images/Navbar-avatar-exemplo.svg`}
                alt="Avatar" />

            <LiNav>
                <User>
                    Nome do usuário
             </User>
            </LiNav>

            <TraçoVertical />

            <LiNav>
                <Sair
                    onClick={signOut}
                    type="button"
                    to="/">
                    <FiLogOut /> 
                    Sair
             </Sair>
            </LiNav>

        </ListaNav>

    </Container>
}

export { Navbar }