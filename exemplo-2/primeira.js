function abrirModal(nome, tipo, titulo) {
    return { nome, tipo, titulo };
}

function modalSelecionado(nome) {
    if (nome == 'configuracao') {
        abrirModal(nome, 1, 'Configurações');
    }
    else if (nome == 'recursos') {
        abrirModal(nome, 2, 'Recursos');
    }
    else if (nome == 'perfil') {
        abrirModal(nome, 3,'Perfil');
    }
}

modalSelecionado('configuracao');