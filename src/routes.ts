import { Router } from 'express';

const routes = Router();

routes.get("/users", (request, response) => {
    return response.json( { message: "Hello World - NLW-04"} )
});

routes.post("/", (request, response) => {
    //assumindo que os dados foram recebidos e salvos e retornando mensagem para o usuário
    return response.json({ message: "Dados salvos com sucesso! "})
});

export default routes;