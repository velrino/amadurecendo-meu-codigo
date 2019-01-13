module.exports = class CodigoRepository {
    getCodigos() {
        return [
            'Lorem Ipsum',
            'Hello World',
        ]
    }

    getCodigo(codigo) {
        const codigos = this.getCodigos();
        let codigoDefinido = codigos[codigo];
        if (!codigoDefinido)
            return codigos[0];
        return codigoDefinido;
    }
}