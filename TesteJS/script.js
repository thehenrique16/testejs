let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");

idade = Number(idade);
console.log("Olá, " + nome + "! Você tem " + idade + " anos.");
console.log(`No próximo ano, você terá ${idade + 1} anos.`);