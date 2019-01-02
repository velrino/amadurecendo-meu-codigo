const nomes = [{ 'nome': 'Atreus' }, { 'nome': 'Kratos' }];

let novosNomes = [];

for (let objeto of nomes) {
    if (objeto.nome !== 'Atreus') {
        novosNomes.push(objeto);
    }
}
/* [{ 'nome': 'Kratos' }] */