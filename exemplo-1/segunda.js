const nomes = [{ 'nome': 'Atreus' }, { 'nome': 'Kratos' }];

let novosNomes = nomes.filter(objeto => objeto.nome !== 'Atreus');
/* [{ 'nome': 'Kratos' }] */