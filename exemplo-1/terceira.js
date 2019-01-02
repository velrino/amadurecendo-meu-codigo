const nomes = [{ 'nome': 'Atreus' }, { 'nome': 'Kratos' }];

const nomesFiltro = ['Atreus'];

let novosNomes = nomes.filter(objeto => !nomesFiltro.includes(objeto.nome));
/* [{ 'nome': 'Kratos' }] */