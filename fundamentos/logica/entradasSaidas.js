// console.log()
const nome = "José"
console.log("Bem-vindo!")
console.log(nome)
console.log("Olá, " + nome)

const idadeTexto = "30"
console.log(idadeTexto + 1)
console.log(Number(idadeTexto) + 1)


const { createInterface } = require("node:readline/promises")
const { stdin, stdout } = require("node:process")

const rl = createInterface({
  input: stdin,
  output: stdout
});

async function main() {
  const name = await rl.question("Qual é seu nome? ")
  const resposta = await rl.question("Qual é sua idade? ")
  const texto = await rl.question("Digite um número:")
  const numero = Number(texto)
  const idade = Number(resposta)

  console.log("Olá, " + name + "!");
  console.log(idade + 1)

  if(texto!== null && texto.trim() !== "" && Number.isFinite(numero)) {
    console.log("Dobro:", numero * 2)
  } else {
    console.log("Entrada inválida ou cancelada.")
  }

  rl.close();
}

main();