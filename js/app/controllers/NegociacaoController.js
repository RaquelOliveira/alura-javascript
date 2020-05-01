class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

       /* this._listaNegociacoes = new ListaNegociacoes( (model) => {
            // as arrowfuncions possuem um escopo léxico isso significa
            // isso significa que o this não mudará de acordo com quem chamar a função
            this._negociacoesView.update(model);
        }); */

        this._listaNegociacoes = new Bind(new ListaNegociacoes(),
        new NegociacoesView($("#negociacoesView")),
        'adiciona','apagar');
    
        this._mensagem =  new Bind(new Mensagem(),
        new MensagemView($("#mensagemView")),
        'texto');
       
    }

    adiciona(event) {
        // sempre que o formulário é enviado a página é recarregada esse metódo impede que a página seja recarregada para que possamos pegar os dados digitados pelo usuário
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criarNegociacao());
        this._mensagem.texto = "Negociacao adicionada com sucesso";
        this._limparFormulario();
    }

    apaga() {
        this._listaNegociacoes.apagar();
        this._mensagem.texto = "Lista de Negociacoes apagadas";
    }

    importar() {
         let service = new NegociacaoService();

         service.obterNegociacaoDaSemana((erro, negociacoes)=> {

            if(erro) {
                this._mensagem.texto = erro;
                return;
            }

            negociacoes
            .forEach(negociacao =>
                this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso';
         });
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