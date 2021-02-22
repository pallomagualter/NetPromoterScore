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

app.listen(3333, () => console.log("Server is running!"));
