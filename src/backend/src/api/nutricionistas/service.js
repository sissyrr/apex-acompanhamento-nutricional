const firebase = require('../../lib/firebase')

const colecaoNutricionistas = firebase
    .collection('nutricionistas')

function salvarNutricionistas(dados) {
    colecaoNutricionistas
        .doc(dados.name)
        .set(dados)
}

function buscarNutricionistas(dados) {
    colecaoNutricionistas
    .get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        });
      })
}

module.exports = {
    salvarNutricionistas,
    buscarNutricionistas
}