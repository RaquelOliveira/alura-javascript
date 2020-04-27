class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        this._listaNegociacoes = new ListaNegociacoes( (model) => {
            // as arrowfuncions possuem um escopo léxico isso significa
            // isso significa que o this não mudará de acordo com quem chamar a função
            this._negociacoesView.update(model);
        });
        this._negociacoesView = new NegociacoesView($("#negociacoesView"));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        // sempre que o formulário é enviado a página é recarregada esse metódo impede que a página seja recarregada para que possamos pegar os dados digitados pelo usuário
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criarNegociacao());
        this._limparFormulario();
        //this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem.texto = "Negociacao adicionada com sucesso";
        this._mensagemView.update(this._mensagem);


        console.log(DateHelper.dataParaTexto(this._listaNegociacoes.negociacoes[0].data));
    

    }

    apaga() {
        this._listaNegociacoes.apagar();
        //this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = "Lista de Negociacoes apagadas";
        this._mensagemView.update(this._mensagem);
    }

    _limparFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0;

        this._inputData.focus();
    }

    _criarNegociacao(){

        return  new Negociacao(DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }
}