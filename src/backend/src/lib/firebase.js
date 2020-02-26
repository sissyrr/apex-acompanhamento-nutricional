const admin = require("firebase-admin");

// Certificado
const serviceAccount = require("../../acesso_banco.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://acompanhamento-nutricional2.firebaseio.com"
});

module.exports = admin.firestore()