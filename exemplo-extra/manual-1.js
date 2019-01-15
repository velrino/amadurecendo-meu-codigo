const { nomes } = require('./ENUMS');
// Destrutor
const { filho } = nomes;

const listaNomes = Object.values(nomes).map((nome) => { return { nome } })
/* [{ 'nome': 'Kratos' }, { 'nome': 'Zeus' }, { 'nome': 'Atreus' }] */
let novosNomes = listaNomes.filter(objeto => objeto.nome !== filho);
/* [{ 'nome': 'Kratos' }, { 'nome': 'Zeus' }] */
let nomesNoNovosNomes = novosNomes.map(objeto => objeto.nome);
/* ['Zeus','Kratos'] */
if (!nomesNoNovosNomes.includes(filho)) {
    novosNomes.push({ 'nome': filho })
    /* [{ 'nome': 'Kratos' }, { 'nome': 'Zeus' }, { 'nome': 'Atreus' }] */
}