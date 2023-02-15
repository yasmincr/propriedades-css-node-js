import readlineSync from "readline-sync";
import chalk from 'chalk';
import gradient from 'gradient-string';


const valores = []
let input = ""

console.log(gradient('pink', 'white')("Por favor insira uma propriedade CSS:"))

while (input != "sair") {
 valores.push(input);
  input = readlineSync
    .question(gradient('pink', 'pink')("- "))
    .toLocaleLowerCase()
}

console.log(gradient('pink', 'pink')(valores.sort().join("\n")))

