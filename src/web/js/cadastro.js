const $name = document.getElementById('name')
const $lastName = document.getElementById('lastName')
const $email = document.getElementById('email')
const $password = document.getElementById('password')
const $repeatPassword = document.getElementById('password')
const $crn = document.getElementById('crn')
const $numeroCrn = document.getElementById('numeroCrn')
const $address = document.getElementById('address')
const $numero = document.getElementById('number')
const $cep = document.getElementById('cep')
const $city = document.getElementById('city')
const $state = document.getElementById('state')
const $maps = document.getElementById('maps')
const $nomeDisplay = document.getElementById('nomeDisplay')
const $logo = document.getElementById('customFile')
const $facebook = document.getElementById('facebook')
const $instagram = document.getElementById('instagram')
const $twitter = document.getElementById('twitter')
const $whatsapp = document.getElementById('whatsapp')


function cadastrarNutricionista() {
  const dadosEnvio = {
    nome: $name.value,
    sobrenome: $lastName.value,
    email: $email.value,
    senha: $password.value,
    confirme_senha: $repeatPassword.value,
    conselho_regional: $crn.value,
    numero_registro: $numeroCrn.value,
    endereco: $address.value,
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
    !dadosEnvio.numero_res ||
    !dadosEnvio.cep ||
    !dadosEnvio.cidade ||
    !dadosEnvio.estado ||
    !dadosEnvio.link_maps ||
    !dadosEnvio.nome_display
    ) {
    alert('Você precisa preencher todos os campos obrigatórios!')
  } else {
    axios
    .post('http://localhost:3000/nutricionistas', dadosEnvio)
    .then(( {data} ) => console.log(data))
  }
  
}
