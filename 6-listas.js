console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);

console.log('Lista original: ');
console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`) 

console.log('Listas modificada: ');
console.log(listaDeDestinos);

// 7- Removendo elementos
listaDeDestinos.splice( 2,1);
console.log('Lista removida: ');
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);

console.log(listaDeDestinos[1], listaDeDestinos[0]);