import React from 'react'

import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { LabelInput, IconInput } from '../Input'
import { FormContainer, Row, Space, CadastroButton, VoltarButton, Fieldset, Legend } from './styles'


function NutriRegister() {
    return (
        <FormContainer>
            <Fieldset>
                <Legend>Crie sua conta</Legend>

                <Row>
                    <LabelInput label="Nome" id="nome" placeholder="João" />

                    <Space />

                    <LabelInput label="Sobrenome" id="sobrenome" placeholder="Silva" />
                </Row>

                <Row>
                    <LabelInput label="CPF" id="cpf" placeholder="088.347.708-66" />

                    <Space />

                    <LabelInput label="Email" id="email" placeholder="joao@email.com" />
                </Row>

                <Row>
                    <LabelInput label="Senha" id="senha" placeholder="********" />

                    <Space />

                    <LabelInput label="Repetir Senha" id="repetirSenha" placeholder="********" />
                </Row>

            </Fieldset>

            <Fieldset>
                <Legend>Dados de Endereço</Legend>

                <Row>
                    <LabelInput label="CEP" id="cep" />

                    <Space />

                    <LabelInput label="Bairro" id="bairro" />
                </Row>

                <Row>
                    <LabelInput label="Rua" id="rua" />

                    <Space />

                    <LabelInput label="Número" id="numero" />
                </Row>

                <Row>
                    <LabelInput label="Estado" id="estado" />

                    <Space />

                    <LabelInput label="Cidade" id="cidade" />
                </Row>

                <Row>

                    <LabelInput label="Como chegar" id="maps" placeholder="Copiar seu endereço do Google" />

                </Row>

            </Fieldset>

            <Fieldset>
                <Legend>Redes sociais</Legend>

                <Row>
                    <IconInput
                        left={<FaFacebookF />}
                        id="facebook"
                        placeholder="facebook.com.br/"
                    />

                    <Space />

                    <IconInput
                        left={<FaTwitter />}
                        id="twitter"
                        placeholder="twitter.com/"
                    />

                </Row>

                <Row>
                    <IconInput
                        left={<FaInstagram />}
                        id="instagram"
                        placeholder="instagram.com/"
                    />

                    <Space />

                    <IconInput
                        left={<FaWhatsapp />}
                        id="whatsapp"
                        placeholder="Número para contato"
                    />

                </Row>

            </Fieldset>

            <Row>
                <VoltarButton to="/" outlined isDark>VOLTAR</VoltarButton>
                <Space />
                <CadastroButton to="/">CADASTRAR</CadastroButton>

            </Row>

        </FormContainer>
    )
}

export { NutriRegister }