//console.log("Olá Node")
const prompt = require("prompt-sync")();

const num = Number(prompt("Digite um número: "));
console.log("\n")

for(let i = 1; i < 11; i++){
    const tabuada = num * i;
    console.log(`A soma dos números é ${tabuada}`);
}
//const somar = num1 + num2;

