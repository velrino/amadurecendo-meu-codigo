const modals = {
    'configuracao': {
        tipo: 1, titulo: 'Configurações',
    },
    'recursos': {
        tipo: 2, titulo: 'Recursos',
    },
    'perfil': {
        tipo: 3, titulo: 'Perfil',
    }
}

function abrirModal({ nome, tipo, titulo }) {
    return { nome, tipo, titulo };
}

function modalSelecionado(nome) {
    const modalEscolhido = modals[nome];
    if (modalEscolhido) {
        const { titulo, tipo } = modalEscolhido;
        abrirModal({ nome, tipo, titulo });
    }
}

modalSelecionado('configuracao');