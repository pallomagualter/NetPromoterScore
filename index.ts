interface DadosDeEnvioEmail {
    para: string;
    id: string;
    assunto: string;
    texto: string
}

function enviarEmail({ para, id, assunto, texto }: DadosDeEnvioEmail){
    console.log(dados.para, dados.id, dados.assunto, dados.texto);
}

class EnviarEmailParaUsuario {
    send() {
        enviarEmail({
            para: "palloma@email.com",
            id: "9899",
            assunto: "Olá!",
            texto: "Tudo bem?"
        })
    }
}