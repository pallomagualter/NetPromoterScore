import express, { request, response } from 'express';

const app = express();

/**
 * GET => BUSCAR
 * POST => SALVAR
 * PUT => ALTERAR
 * DELETE => DELETAR
 * PATCH => ALTERAÇÃO ESPECÍFICA
 */

app.get("/users", (request, response) => {
    return response.json( { message: "Hello World - NLW-04"} )
});

app.post("/", (request, response) => {
    //assumindo que os dados foram recebidos e salvos e retornando mensagem para o usuário
    return response.json({ message: "Dados salvos com sucesso! "})
});

app.listen(3333, () => console.log("Server is running!"));
