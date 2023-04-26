const mongoose = require("mongoose");

async function main() {
    try {
        // VERFICAÇÃO SE JÁ EXISTE CONECXÃO ABERTA COM O BANCO DE DADOS.
        if (mongoose.connection.readyState === 1) {
            console.log('A conexão já está aberta.');
        } else {
            mongoose.set("strictQuery", true);

            await mongoose.connect(
                "mongodb+srv://NicolasRSJ:29030801@listadetarefas.bu7ivse.mongodb.net/?retryWrites=true&w=majority"
            )
    
            console.log("Conecxão realizada com sucesso...");
        }          
    } catch (error) {
        console.log(`Ops Ocorreu um error: ${error}`)
    }
}

module.exports = main