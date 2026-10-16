// for
for(let contador = 1; contador <= 5; contador++) {
  console.log(contador)
}

let soma = 0
for(let numero = 1; numero <= 5; numero++) {
  soma = soma + numero
}

console.log(soma)

// while
let bateria = 3
while(bateria > 0) {
  console.log("Bateria restante:", bateria)
  bateria--
}

console.log("Bateria descarregadda")

let tentativas = 0
const limite = 3
while(tentativas < limite) {
  console.log("Tentativa:", tentativas + 1)
  tentativas++
}