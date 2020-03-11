const $cepConsulta = document.getElementById('cep')

function consultarCep() {
    axios
    .get(`http://viacep.com.br/ws/${$cepConsulta.value}/json/`)
    .then(({data}) => {
        $street.value = data.logradouro
        $neighborhood.value = data.bairro
        $state.value = data.uf
    
        buscarCidades().then(function () {
            $city.value = data.ibge
            
            $city.disabled = true
            $state.disabled = true
            $street.disabled = true
            $neighborhood.disabled = true
        })
    })
    .catch(function () {
        $('#cepNaoEncontrado').modal({
            backdrop: 'static',
            show: true
        })
    })
    
}