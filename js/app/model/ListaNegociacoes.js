class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
        //this._armadilha = armadinha;
    }

    adiciona (negociacao) {
        this._negociacoes.push(negociacao);
      //  this._armadilha(this);
        /* essa fução é utilizada para axecutar a função criada independente do contexto
        o primeiro paramêtro é qual a função que eu vou chamar, que nesse caso é a armadilha criada no NegociacaoControle para chamar o update;
        o segundo parâmetro diz em qual contexto que a função será executada, que seria o contexto na NegociacaoController passado no construtor
        o terceiro parâmetro representa quais os argumentos para a função, que nesse caso seria a propria listaNegociacao
        
        Reflect.apply(this._armadilha,this._context,[this]); */
    }

    apagar() {
        this._negociacoes = [];
        //this._armadilha(this);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }
}