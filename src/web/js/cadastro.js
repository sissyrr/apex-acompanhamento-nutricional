function cadastrarNutricionista() {
  const dadosEnvio = {
    nome: $name.value,
    sobrenome: $lastName.value,
    email: $email.value,
    senha: $password.value,
    confirme_senha: $repeatPassword.value,
    conselho_regional: $crn.value,
    numero_registro: $numeroCrn.value,
    endereco: $street.value,
    neighborhood: $neighborhood.value,
    numero_res: $numero.value,
    cep: $cep.value,
    cidade: $city.value,
    estado: $state.value,
    link_maps: $maps.value,
    nome_display: $nomeDisplay.value,
    logo: $logo.value,
    facebook: $facebook.value,
    instagram: $instagram.value,
    twitter: $twitter.value,
    whatsapp: $whatsapp.value
  }

  if (
    !dadosEnvio.nome ||
    !dadosEnvio.sobrenome ||
    !dadosEnvio.email ||
    !dadosEnvio.senha ||
    !dadosEnvio.confirme_senha ||
    !dadosEnvio.conselho_regional ||
    !dadosEnvio.numero_registro ||
    !dadosEnvio.endereco ||
    !dadosEnvio.neighborhood ||
    !dadosEnvio.numero_res ||
    !dadosEnvio.cep ||
    !dadosEnvio.cidade ||
    !dadosEnvio.estado ||
    !dadosEnvio.link_maps ||
    !dadosEnvio.nome_display
  ) {
    $('#camposModal').modal('show')
    return
  }

  if (
    dadosEnvio.senha !== dadosEnvio.confirme_senha
  ) {
    $('#senhasModal').modal('show')
  }


  axios
    .post('http://localhost:3000/nutricionistas', dadosEnvio)
    .then(() => {
      $('#salvoModal').modal({
        backdrop: 'static',
        show: true
      })
    })
    .catch(() => {
      $('#erroModal').modal({
        backdrop: 'static',
        show: true
      })
    })

}

function buscarEstados() {
  axios
    .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(({ data }) => {

      const optionsState = data.map(function (state) {
        return `<option value="${state.sigla}" data-id="${state.id}">${state.nome}</option>`
      })

      console.log({ optionsState })
      $state.insertAdjacentHTML('beforeend', optionsState)

    })
}

function buscarCidades() {
  const indiceEstadoSelecinado = $state.selectedIndex
  const stateId = $state.options[indiceEstadoSelecinado].getAttribute('data-id')
  console.log({ stateId })

  console.log(indiceEstadoSelecinado)
  console.log($state.options)


  return axios
    .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`)
    .then(({ data }) => {

      const optionsCity = data.map(function (item) {
        return `<option value="${item.id}">${item.nome}</option>`
      })

      console.log({ optionsCity })

      $city.options.length = 0
      $city.insertAdjacentHTML('beforeend', optionsCity)
    })
}

buscarEstados()

