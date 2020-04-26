import React from 'react'

import { AiOutlineMail, AiOutlineKey } from 'react-icons/ai';

import { Switch } from '../Switch'
import { Button } from '../Button'
import { Card } from '../Card'
import { Logo } from './Logo'
import { IconInput } from '../Input/IconInput'

import { Form, Space, Container, RecuperarSenha, Pergunta, Cadastro, Div, DivSwitch } from './styles'


function LoginForm() {
    return (
        <Card>
            <Container>
                <Div>
                    <Logo />
                </Div>
                <Space />

                <Form>
                    <IconInput
                        left={<AiOutlineMail />}
                        placeholder="Email"
                        type="email"
                    />

                    <IconInput
                        left={<AiOutlineKey />}
                        placeholder="Senha"
                        helpText="Esqueceu sua senha?"
                        type="password"
                    />

                    <RecuperarSenha to="/forgot-password" >Esqueceu a sua senha?</RecuperarSenha>
                </Form>

                <DivSwitch>
                    <Switch
                        label="Sou Nutricionista"
                    />
                </DivSwitch>

                <Space />

                <Div>
                    <Button type="submit" to="/">ENTRAR</Button>
                    <Pergunta>Não tem uma conta? <Cadastro to="/create-account">Cadastre-se já</Cadastro></Pergunta>
                </Div>


            </Container>

        </Card>
    )
}

export { LoginForm }