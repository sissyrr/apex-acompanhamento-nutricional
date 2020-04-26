import React from 'react'

import { AiOutlineMail, AiOutlineKey } from 'react-icons/ai';

import { Logo } from './Logo'
import { Button } from '../Button'
import { Card } from '../Card'
import { IconInput } from '../Input/IconInput'

import { Form, Space, Container, Titulo, Div, Subtitulo } from './styles'


function PasswordForm() {
    return (
        <Card>
            <Container>
                {/* <Logo /> */}
                <Div>
                    <Titulo>Esqueceu sua senha?</Titulo>
                    <Subtitulo>Digite o email cadastrado para redefinir sua senha</Subtitulo>
                </Div>

                <Form>
                    <IconInput
                        left={<AiOutlineMail />}
                        placeholder="Email"
                        type="email"
                    />

                    <Space />

                    <Div>
                        <Button type="submit" to="/">ENVIAR NOVA SENHA</Button>
                    </Div>
                </Form>
            </Container>
        </Card>
    )
}

export { PasswordForm }