// server.js
const mongoose = require('mongoose');

const uri = "mongodb+srv://natanaelnoronha9_db_user:Natanael45@cluster0.fbt0woz.mongodb.net/";

async function conectarBanco() {
  try {
    await mongoose.connect(uri);
    console.log("✅ Conectado ao MongoDB Atlas com sucesso!");
  } catch (erro) {
    console.error("❌ Erro ao conectar ao MongoDB:", erro);
  }
}

conectarBanco();
