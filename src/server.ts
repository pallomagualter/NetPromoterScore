import express from 'express';

const app = express();

/**
 * GET => BUSCAR
 * POST => SALVAR
 * PUT => ALTERAR
 * DELETE => DELETAR
 * PATCH => ALTERAÇÃO ESPECÍFICA
 */

app.listen(3333, () => console.log("Server is running!"));
