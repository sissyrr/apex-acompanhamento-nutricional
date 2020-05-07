import React from 'react'

import { AiOutlineMail } from 'react-icons/ai';

import { Button } from '../Button'
import { Card } from '../Card'
import { IconInput } from '../Input/IconInput'

import { Form, Space, Container, Titulo, Div, Subtitulo, Pergunta, GoToLogin } from './styles'


function PasswordForm() {
    return (
        <Card>
            <Container>
                <Div>
                    <Titulo>Esqueceu sua senha?</Titulo>
                    <Subtitulo>Digite o email cadastrado para criar uma senha nova</Subtitulo>
                </Div>

                <Form>
                    <IconInput
                        left={<AiOutlineMail />}
                        placeholder="Email"
                        type="email"
                    />

                    <Space />

                    <Div>
                        <Button type="submit" to="/">REDEFINIR SENHA</Button>
                        <Pergunta>Já possui a senha? <GoToLogin to="/login">Faça seu login</GoToLogin></Pergunta>
                    </Div>
                </Form>
            </Container>
        </Card>
    )
}

export { PasswordForm }