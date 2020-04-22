import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { Select } from '../Select'
import { LabelInput, IconInput, ButtonInput } from '../Input'
import { FormContainer, Row, Space, CadastroButton, VoltarButton, Fieldset, Legend } from './styles'


function NutriRegister() {
    const [states, setStates] = useState()
    const [cities, setCities] = useState()
    const [selectedStateInitials, setStateInitials] = useState()

    useEffect(getStates, [])
    useEffect(getCities, [selectedStateInitials])

    // Buscar estados
    function getStates() {
        axios
            .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(({ data }) => {
                const states = data.map(function (state) {
                    return { id: state.id, value: state.sigla, text: state.nome }
                })

                setStates(states)
            })
    }

    // Buscar cidades
    function getCities() {
        if (selectedStateInitials) {

            const selectedState = states.find(state => state.value === selectedStateInitials)
            console.log({ selectedState })

            axios
                .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState.id}/municipios`)
                .then(({ data }) => {
                    const cities = data.map(function (city) {
                        return { value: city.id, text: city.nome }
                    })

                    setCities(cities)
                })
        }

    }

    // Buscar CEP
    // function getCep() {
    //     axios
    //         .get(`http://viacep.com.br/ws/89040090/json/`)
    //         .then(({ data }) => {
    //             const cep = data.map(function (state) {
    //                 return {  }
    //             })

    //             setStates(states)
    //         })
    // }



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
                    <ButtonInput
                        label="CEP"
                        right="Consultar"
                        id="cep"
                    />

                    <Space />

                    <LabelInput label="Bairro" id="bairro" />
                </Row>

                <Row>
                    <LabelInput label="Rua" id="rua" />

                    <Space />

                    <LabelInput label="Número" id="numero" />
                </Row>

                <Row>
                    <Select
                        label="Estado"
                        id="state"
                        options={states}
                        onSelect={function (id) { setStateInitials(id) }}
                    />

                    <Space />

                    <Select
                        label="Cidade"
                        id="city"
                        options={cities}
                    />
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