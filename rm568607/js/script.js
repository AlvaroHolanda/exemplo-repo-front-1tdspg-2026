//alert("ola mundo!");
//var nome = prompt("ola, digite seu nome: ");

//alert("Meu nome é " + nome);
//console.log("Meu nome é " + nome);

// HOISTING
// var nome = "Alê";
// let sobreNome = "Carlos";

// if(true){

//     var nome = "Joaquim";
//     let sobreNome = "Das Couves";

// }

// console.log(nome);
// console.log(sobreNome);

//declarando variáveis em JS com let

let nome = "Jose";
let idade = 33;
let emprego = false;

//imprimir os dados do nosso usuario JOSE com console.log usando concatenação simples:
console.log(nome + " de " + idade + " anos está " + (emprego === true ? "empregado" : "desempregado") + " atualmente.");

//Exercico, agora escreva a mesma frase com template-literal, onde o texto e as variaveis ficam dentro de ' ' e as variaveis são apresentadas entre os simbolos de ${variavel}
console.log(`${nome} de ${idade} anos está ${(emprego === true ? "empregado" : "desempregado")} atualmente.`);
