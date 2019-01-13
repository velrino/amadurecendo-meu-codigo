const CodigoRepository = require('./CodigoRepository');

module.exports = class PesquisaEntity {
    constructor(tipo, codigo, nome) {
        this.defineCodigo(codigo);
        this.nome = nome || null;
        this.tipo = (!tipo) ? tipo : true;
    }

    defineCodigo(codigo) {
        this.codigo = new CodigoRepository().getCodigo(codigo);
    }

    alteraNome(nome) {
        this.nome = nome;
    }

    alteraTipo() {
        this.tipo = !this.tipo;
    }
}