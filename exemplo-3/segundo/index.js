const PesquisaEntity = require('./PesquisaEntity');

let pesquisa = new PesquisaEntity(false);
/* PesquisaEntity { 
    codigo: 'Lorem Ipsum', 
    nome: null, 
    tipo: false } */
pesquisa.alteraNome('Nerdzão');
/* PesquisaEntity { 
    codigo: 'Lorem Ipsum', 
    nome: 'Nerdzão', 
    tipo: false } */
pesquisa.alteraTipo();
/* PesquisaEntity { 
    codigo: 'Lorem Ipsum', 
    nome: 'Nerdzão', 
    tipo: true } */
pesquisa = new PesquisaEntity(false, 2, 'Nova Pesquisa');
/* PesquisaEntity { 
    codigo: 'Hello World', 
    nome: 'Nova Pesquisa', 
    tipo: false } */
pesquisa.alteraNome('Nova Pesquisa reexibida');
/* PesquisaEntity {
    codigo: 'Hello World',  
    nome: 'Nova Pesquisa reexibida',
    tipo: false } */