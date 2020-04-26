import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { Select } from '../Select'
import { LabelInput, IconInput, ButtonInput } from '../Input'
import { FormContainer, Row, Space, CadastroButton, VoltarButton, Fieldset, Legend } from './styles'


function NutriRegister() {
    const [states, setStates] = useState()
    const [cities, setCities] = useState()
    const [selectedStateInitials, setStateInitials] = useState()
    const [disabled, setDisabled] = useState(false)


    const [data, setData] = useState({
        name: '',
        lastName: '',
        cpf: '',
        email: '',
        password: '',
        repeatPassword: '',
        cep: '',
        neighborhood: '',
        street: '',
        number: '',
        state: '',
        city: '',
        maps: '',
        facebook: '',
        twitter: '',
        instagram: '',
        whatsapp: ''
    })

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

    function onChangeValue(field, value) {
        setData({
            ...data,
            [field]: value
        })

        console.log(data)
    }

    // Buscar CEP
    function getByCEP() {
        axios
            .get(`http://viacep.com.br/ws/${data.cep}/json/`)
            .then(({ data: foundData }) => {
                setData({
                    ...data,
                    street: foundData.logradouro,
                    neighborhood: foundData.bairro,
                    state: foundData.uf,
                    city: foundData.ibge
                })
                setStateInitials(foundData.uf)
                setDisabled(true)
            })

            .catch(() => {
                Swal.fire(
                    'Que pena!',
                    'Não encontramos o seu CEP. Tente novamente ou preencha os dados manualmente.',
                    'error'
                )
            })
    }

    function handleStateChange(id) {
        setStateInitials(id)
        setData({
            ...data,
            state: id
        })

    }

    function passwordsAreEqual() {
        return data.password === data.repeatPassword
    }

    function camposObrigatorios() {
        const isFormValid = !!data.name &&
        !!data.lastName &&
        !!data.email &&
        !!data.password &&
        !!data.repeatPassword &&
        !!data.cep &&
        !!data.neighborhood &&
        !!data.street &&
        !!data.number &&
        !!data.state &&
        !!data.city

        if (!isFormValid) {
            Swal.fire(
                'Ops!',
                'Parece que você não preencheu alguns dados obrigatórios.',
                'error'
            )
        }
    }

    function handleSubmit(e) {
        camposObrigatorios()
        e.preventDefault()
    }

    return (
        <FormContainer onSubmit={ handleSubmit } >
            <Fieldset>
                <Legend>Crie sua conta</Legend>

                <Row>
                    <LabelInput
                        label="Nome*"
                        id="name"
                        placeholder="João"
                        value={data.name}
                        onChangeText={(text) => { onChangeValue('name', text) }}
                    />

                    <Space />

                    <LabelInput
                        label="Sobrenome*"
                        id="lastName"
                        placeholder="Silva"
                        value={data.lastName}
                        onChangeText={(text) => { onChangeValue('lastName', text) }}
                        // invalid={!camposObrigatorios()}
                    />
                </Row>

                <Row>
                    <LabelInput
                        label="CPF"
                        id="cpf"
                        placeholder="088.347.708-66"
                        value={data.cpf}
                        onChangeText={(text) => { onChangeValue('cpf', text) }}
                    />

                    <Space />

                    <LabelInput
                        type="email"
                        label="Email*"
                        id="email"
                        placeholder="joao@email.com"
                        value={data.email}
                        onChangeText={(text) => { onChangeValue('email', text) }}
                        // invalid={!camposObrigatorios()}
                    />
                </Row>

                <Row>
                    <LabelInput
                        type="password"
                        label="Senha*"
                        id="password"
                        value={data.password}
                        onChangeText={(text) => { onChangeValue('password', text) }}
                        // invalid={!camposObrigatorios()}
                    />

                    <Space />

                    <LabelInput
                        type="password"
                        label="Repetir Senha*"
                        id="repeatPassword"
                        value={data.repeatPassword}
                        onChangeText={(text) => { onChangeValue('repeatPassword', text) }}
                        invalid={!passwordsAreEqual()}
                        helpText={!passwordsAreEqual() ? "As senhas não são iguais" : null}
                    />
                </Row>

            </Fieldset>

            <Fieldset>
                <Legend>Dados de Endereço</Legend>

                <Row>
                    <ButtonInput
                        label="CEP*"
                        right="Consultar"
                        id="cep"
                        onPress={getByCEP}
                        onChangeText={(text) => { onChangeValue('cep', text) }}
                        value={data.cep}
                        // invalid={!camposObrigatorios()}
                    />

                    <Space />

                    <LabelInput
                        label="Bairro*"
                        id="neighborhood"
                        value={data.neighborhood}
                        onChangeText={(text) => { onChangeValue('neighborhood', text) }}
                        disabled={disabled}
                        // invalid={!camposObrigatorios()}

                    />
                </Row>

                <Row>
                    <LabelInput
                        label="Rua*"
                        id="street"
                        value={data.street} disabled={disabled}
                        onChangeText={(text) => { onChangeValue('street', text) }}
                        // invalid={!camposObrigatorios()}
                    />

                    <Space />

                    <LabelInput
                        label="Número*"
                        id="number"
                        value={data.number}
                        onChangeText={(text) => { onChangeValue('number', text) }}
                        // invalid={!camposObrigatorios()}
                    />
                </Row>

                <Row>
                    <Select
                        label="Estado*"
                        id="state"
                        options={states}
                        onSelect={handleStateChange}
                        value={data.state}
                        disabled={disabled}
                        // invalid={!camposObrigatorios()}
                    />

                    <Space />

                    <Select
                        label="Cidade*"
                        id="city"
                        options={cities}
                        value={data.city}
                        disabled={disabled}
                        onSelect={(IBGECode) => onChangeValue('city', IBGECode)}
                        // invalid={!camposObrigatorios()}
                    />
                </Row>

                <Row>

                    <LabelInput
                        label="Como chegar"
                        id="maps"
                        placeholder="Copiar seu endereço do Google"
                        value={data.maps}
                        onChangeText={(text) => { onChangeValue('maps', text) }}
                    />

                </Row>

            </Fieldset>

            <Fieldset>
                <Legend>Redes sociais</Legend>

                <Row>
                    <IconInput
                        left={<FaFacebookF />}
                        id="facebook"
                        placeholder="facebook.com.br/"
                        value={data.facebook}
                        onChangeText={(text) => { onChangeValue('facebook', text) }}
                    />

                    <Space />

                    <IconInput
                        left={<FaTwitter />}
                        id="twitter"
                        placeholder="twitter.com/"
                        value={data.twitter}
                        onChangeText={(text) => { onChangeValue('twitter', text) }}
                    />

                </Row>

                <Row>
                    <IconInput
                        left={<FaInstagram />}
                        id="instagram"
                        placeholder="instagram.com/"
                        value={data.instagram}
                        onChangeText={(text) => { onChangeValue('instagram', text) }}
                    />

                    <Space />

                    <IconInput
                        left={<FaWhatsapp />}
                        id="whatsapp"
                        placeholder="Número para contato"
                        value={data.whatsapp}
                        onChangeText={(text) => { onChangeValue('whatsapp', text) }}
                    />

                </Row>

            </Fieldset>

            <Row>
                <VoltarButton to="/" outlined isDark>VOLTAR</VoltarButton>
                <Space />
                <CadastroButton type="submit" to="/" >CADASTRAR</CadastroButton>

            </Row>

        </FormContainer>
    )
}

export { NutriRegister }