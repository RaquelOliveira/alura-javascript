class NegociacaoService {
    obterNegociacaoDaSemana(cb) {
        let xhr = new XMLHttpRequest();
        /*  O método open recebe dois tipos de parâmetros
            primeiro: Qual é i tipo de requisição a ser feita (ex: GET,POST,DELETE);
            segundo: o endereço da requisição
            
            esse método é apenas a preparação a requisição é feita apenas quando a função .send for chamada
        */
        xhr.open("GET","negociacoes/semana");

        xhr.onreadystatechange = () => {
            /* possíveis estados de uma requisição AJAX 
            0: requisição ainda não iniciada
            1: conexão com o servidor estabelecida
            2: requisição recebida
            3: processando requisição
            4: requisição está concluída e a resposta está pronta
            */
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    console.log("Obtendo informações do servidor");
                    
                    cb(null, JSON
                        .parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data),
                        objeto.quantidade,
                        objeto.valor)));
                } else {
                    console.log(xhr.responseText);
                    cb("Não foi possível acessar o servidor",null);
                    
                }
            }

        };

        xhr.send();
    }
}