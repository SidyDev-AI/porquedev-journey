// if 
const idade = 20
if(idade >= 18) {
  console.log("Maior de idade")
}

// if else
if(idade >= 24) {
  console.log("Pode entrar")
} else {
  console.log("Não pode entrar")
}

// else if
const nota = 7
if(nota >= 9) {
  console.log("Excelente")
} else if(nota >= 6) {
  console.log("Aprovado")
} else {
  console.log("Precisa estudar mais")
}

// switch
const opcao = 2
switch(opcao) {
  case 1:
    console.log("Ver perfil")
    break
  case 2:
    console.log("Editar perfil")
    break
  case 3:
    console.log("Sair")
    break
  default:
    console.log("Opção desconhecida")
}