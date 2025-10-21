const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("⏳ Conectando ao banco de dados...");

  mongoose.connect(
    "mongodb+srv://root:Natanael45@cluster0.cbphb.mongodb.net/mercado?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("✅ MongoDB Atlas conectado com sucesso!"))
  .catch((error) => console.error("❌ Erro ao conectar ao MongoDB:", error));
};

module.exports = connectDatabase;
