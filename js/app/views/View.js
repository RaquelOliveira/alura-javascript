class View {
    constructor(element) {
        this._elemento = element;
    }

    template(model) {
        throw new Error ("Metódo template precisa ser sobreescrito");
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}