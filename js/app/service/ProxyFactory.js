class ProxyFactory {

    static create(objeto, props, acao) {
       return new Proxy(objeto, {

            get(target, prop, receiver) {
                if( props.includes(prop) && ProxyFactory._isFuncion(target[prop])) {
                    return function() {

                        console.log(`propriedade ${prop} interceptada.`);
                        let retorno = Reflect.apply(target[prop], target, arguments);
                        acao(target);
                        return  retorno;
                    }
                }

                return Reflect.get(target, prop, receiver);
            },
            
            set(target, prop, value, receiver) {

                if(props.includes(prop)){
                    target[prop] = value;
                    acao(target);
                }
                return Reflect.set(target,prop, value, receiver);

            }

        });
    }

    static _isFuncion(funcao) {
       return typeof(funcao) == typeof(Function);
    }
}