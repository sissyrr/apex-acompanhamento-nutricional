
import React, { useState } from 'react'

import { AiOutlineMail, AiOutlineKey } from 'react-icons/ai'

import { login } from '../../services/auth'
import { useHistory } from 'react-router-dom'

import Swal from 'sweetalert2'

import { Card } from '../Card'
import { Logo } from './Logo'
import { IconInput } from '../Input/IconInput'
import { Button } from '../Button'
import { Switch } from '../Switch'

import { Form, Space, Container, RecuperarSenha, Pergunta, Cadastro, Div, DivSwitch } from './styles'


function LoginForm() {
    const [data, setData] = useState({ email: '', password: '' })
    const history = useHistory()

    function onChangeValue(field, value) {
        setData({
            ...data,
            [field]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log({ data })
        login(data)
            .then(({ data }) => {
                localStorage.setItem('user', JSON.stringify(data));
                history.push('/dashboard')
            })
            .catch(error => {
                Swal.fire(
                    'Ops!',
                    'Usuário ou senha incorretos. Tente novamente.',
                    'error'
                )
            })

        e.preventDefault()
    }

    return (
        <Card>
            <Container>
                <Div>
                    <Logo />
                </Div>
                <Space />

                <Form onSubmit={handleSubmit}>
                    <IconInput
                        left={<AiOutlineMail />}
                        placeholder="Email"
                        type="email"
                        onChangeText={(text) => { onChangeValue('email', text) }}
                    />

                    <IconInput
                        left={<AiOutlineKey />}
                        placeholder="Senha"
                        type="password"
                        onChangeText={(text) => { onChangeValue('password', text) }}
                    />

                    <RecuperarSenha to="/forgot-password" >Esqueceu a sua senha?</RecuperarSenha>

                    <DivSwitch>
                        <Switch
                            label="Sou nutricionista"
                        />
                    </DivSwitch>

                    <Space />

                    <Div>
                        <Button type="submit" to="/">ENTRAR</Button>
                        <Pergunta>Não tem uma conta? <Cadastro to="/create-account">Cadastre-se já</Cadastro></Pergunta>
                    </Div>
                </Form>
            </Container>

        </Card>
    )
}

export { LoginForm }