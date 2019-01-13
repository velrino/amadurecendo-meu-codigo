let pesquisa = {
    codigo: null,
    nome: null,
    tipo: true,
};

const codigos = [
    'Lorem Ipsum',
    'Hello World',
]

function getCodigo(codigo) {
    let codigoDefinido = codigos[codigo];
    if (!codigoDefinido)
        return codigos[0];
    return codigoDefinido;
}

function definePesquisa(codigo = null, nome = null) {
    Object.assign(pesquisa, { codigo : getCodigo(codigo), nome });
}

definePesquisa(123, 'Nerdzão');
/* { codigo: 'Lorem Ipsum', nome: 'Nerdzão', tipo: true } */