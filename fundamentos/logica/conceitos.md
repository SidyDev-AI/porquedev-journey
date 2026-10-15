# PorQueDev --- Jornada de Estudos

## Dia 01: Fundamentos da programação com JavaScript

> **Objetivo do dia:** entender os fundamentos que permitem guardar
> informações, fazer cálculos, tomar decisões, repetir tarefas e
> organizar código em funções.
>
> **Como estudar:** leia uma seção por vez, digite os exemplos no seu
> editor e tente prever o resultado antes de executar o código. Não
> copie apenas: experimente alterar os valores.

------------------------------------------------------------------------

## Sumário

1.  [Preparando o ambiente](#1-preparando-o-ambiente)
2.  [Variáveis e constantes: `let` e
    `const`](#2-variáveis-e-constantes-let-e-const)
3.  [Tipos primitivos](#3-tipos-primitivos)
4.  [Operadores](#4-operadores)
5.  [Entrada e saída simples](#5-entrada-e-saída-simples)
6.  [Condicionais: `if`, `else` e
    `switch`](#6-condicionais-if-else-e-switch)
7.  [Laços de repetição: `for` e
    `while`](#7-laços-de-repetição-for-e-while)
8.  [Funções, parâmetros e retorno](#8-funções-parâmetros-e-retorno)
9.  [Exemplo integrador](#9-exemplo-integrador)
10. [Erros comuns](#10-erros-comuns)
11. [Exercícios práticos](#11-exercícios-práticos)
12. [Desafio do dia](#12-desafio-do-dia)
13. [Resumo para revisão](#13-resumo-para-revisão)
14. [Checklist de progresso](#14-checklist-de-progresso)

------------------------------------------------------------------------

## 1. Preparando o ambiente

Neste primeiro dia, vamos usar **JavaScript** para estudar os conceitos.
Isso combina com nossa trilha: JavaScript no frontend e Python no
backend. Muitos conceitos que aprenderemos também existem em Python, mas
a sintaxe muda.

Você pode executar os exemplos de JavaScript no console do navegador:

1.  Abra uma página no navegador.
2.  Pressione `F12` ou clique com o botão direito e escolha
    **Inspecionar**.
3.  Abra a aba **Console**.
4.  Digite um exemplo e pressione `Enter`.

Para começar, execute:

``` js
console.log("Olá, PorQueDev!");
```

Resultado esperado:

``` text
Olá, PorQueDev!
```

`console.log()` mostra informações no console, algo muito útil para
aprender e investigar problemas.

------------------------------------------------------------------------

## 2. Variáveis e constantes: `let` e `const`

Uma variável é um nome associado a um valor que podemos usar no
programa. Pense em uma etiqueta colocada em uma caixa: a etiqueta é o
nome e o conteúdo da caixa é o valor.

### 2.1 Usando `let`

Use `let` quando precisar **reatribuir** a variável, ou seja, quando o
valor poderá mudar durante a execução.

``` js
let idade = 20;

console.log(idade); // 20

idade = 21;

console.log(idade); // 21
```

A primeira linha cria a variável `idade` com valor `20`. Depois,
atribuímos `21` a ela.

### 2.2 Usando `const`

Use `const` quando não pretende reatribuir aquela variável.

``` js
const nome = "Ana";

console.log(nome); // Ana
```

Se tentar reatribuir o valor, o JavaScript gera um erro:

``` js
const nome = "Ana";
nome = "Bruna"; // Erro: não é possível reatribuir uma constante
```

**Importante:** `const` impede a reatribuição da variável, mas não torna
automaticamente imutável o conteúdo de objetos e arrays. Esse é um
detalhe para estudar mais adiante.

### 2.3 Qual devo usar?

  -----------------------------------------------------------------------
  Situação                Escolha                 Exemplo
  ----------------------- ----------------------- -----------------------
  O valor precisa ser     `let`                   contador, pontuação que
  reatribuído                                     aumenta

  O valor não será        `const`                 nome de uma aplicação,
  reatribuído                                     preço-base

  Ainda não sabe se       Comece com `const` e    boa prática geral
  precisará mudar         mude para `let` se      
                          necessário              
  -----------------------------------------------------------------------

Exemplo de uso combinado:

``` js
const produto = "Caderno";
let quantidade = 2;

quantidade = quantidade + 1;

console.log(produto);     // Caderno
console.log(quantidade);  // 3
```

### 2.4 Boas práticas de nomes

-   Use nomes que expliquem o conteúdo: `precoProduto` é melhor que `x`.
-   Em JavaScript, é comum usar **camelCase**: `nomeCompleto`,
    `totalCompra`.
-   Nomes diferenciam maiúsculas de minúsculas: `idade` e `Idade` são
    diferentes.
-   Evite palavras reservadas, como `if`, `const` e `for`.

------------------------------------------------------------------------

## 3. Tipos primitivos

Um tipo indica a categoria de um valor e influencia o que podemos fazer
com ele.

### 3.1 `string` --- texto

Textos são escritos entre aspas simples, duplas ou crases.

``` js
const nome = "Marina";
const mensagem = `Olá, ${nome}!`;

console.log(mensagem); // Olá, Marina!
```

As crases permitem inserir expressões usando `${...}`. Isso é chamado de
*template literal*.

**Uso comum:** nomes, e-mails, mensagens, endereços e textos digitados
por pessoas.

### 3.2 `number` --- números

JavaScript usa o tipo `number` para números inteiros e decimais.

``` js
const idade = 25;
const preco = 19.9;

console.log(idade); // 25
console.log(preco); // 19.9
console.log(idade + 5); // 30
```

No código JavaScript, o decimal é escrito com ponto: `19.9`, não `19,9`.

**Uso comum:** idade, preços, quantidade, medidas e resultados de
cálculos.

### 3.3 `boolean` --- verdadeiro ou falso

Um booleano só pode ter dois valores: `true` ou `false`.

``` js
const estaLogado = true;
const temPermissao = false;

console.log(estaLogado); // true
```

**Uso comum:** verificar se uma pessoa está autenticada, se um
formulário é válido ou se um produto está disponível.

### 3.4 `null` --- ausência intencional de valor

`null` é usado quando queremos indicar explicitamente que não há um
valor definido naquele momento.

``` js
let usuarioSelecionado = null;

console.log(usuarioSelecionado); // null
```

Por exemplo, uma aplicação pode usar `null` para indicar que ninguém foi
selecionado ainda.

### 3.5 `undefined` --- valor ainda não definido

Uma variável declarada, mas que ainda não recebeu um valor, fica com
`undefined`.

``` js
let telefone;

console.log(telefone); // undefined
```

### 3.6 Diferença entre `null` e `undefined`

  -----------------------------------------------------------------------
  Valor                   Ideia principal         Exemplo
  ----------------------- ----------------------- -----------------------
  `null`                  A ausência foi indicada `let usuario = null;`
                          intencionalmente        

  `undefined`             Não há um valor         `let telefone;`
                          atribuído ou disponível 
  -----------------------------------------------------------------------

Eles não significam exatamente a mesma coisa. Em aplicações, essa
diferença pode ajudar a distinguir "ainda não foi informado" de "foi
definido que não existe".

### 3.7 Descobrindo um tipo com `typeof`

``` js
console.log(typeof "Olá");       // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (comportamento histórico do JavaScript)
```

**Atenção:** `typeof null` retornar `"object"` é uma peculiaridade
histórica da linguagem. Apesar disso, `null` é tratado como um valor
primitivo.

### 3.8 Comparando os tipos

``` js
const nome = "Lucas";
const idade = 30;
const ativo = true;
const endereco = null;
let apelido;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ativo);
console.log(endereco);
console.log(apelido);
```

Antes de executar, tente prever a saída de cada linha.

------------------------------------------------------------------------

## 4. Operadores

Operadores permitem fazer cálculos, comparar valores e combinar
condições.

### 4.1 Operadores aritméticos

  Operador   Significado        Exemplo      Resultado
  ---------- ------------------ ---------- -----------
  `+`        Adição             `5 + 2`            `7`
  `-`        Subtração          `5 - 2`            `3`
  `*`        Multiplicação      `5 * 2`           `10`
  `/`        Divisão            `5 / 2`          `2.5`
  `%`        Resto da divisão   `5 % 2`            `1`
  `**`       Potência           `2 ** 3`           `8`

Exemplo prático: calcular o valor de uma compra.

``` js
const preco = 12;
const quantidade = 3;
const total = preco * quantidade;

console.log(total); // 36
```

O operador `%` é útil para verificar se um número é par ou ímpar:

``` js
const numero = 8;

console.log(numero % 2 === 0); // true: é par
```

Se o resto da divisão por `2` for zero, o número é par.

### 4.2 Atenção ao operador `+` com textos

O `+` pode somar números ou juntar textos, dependendo dos valores
envolvidos.

``` js
console.log(2 + 3);       // 5
console.log("2" + "3");   // "23"
console.log("Olá, " + "mundo!"); // "Olá, mundo!"
```

Por isso, preste atenção ao tipo dos dados antes de fazer operações.

### 4.3 Operadores de comparação

Comparações produzem um resultado booleano: `true` ou `false`.

  Operador   Significado         Exemplo
  ---------- ------------------- --------------------
  `===`      Igualdade estrita   `5 === 5` → `true`
  `!==`      Diferença estrita   `5 !== 3` → `true`
  `>`        Maior que           `8 > 3` → `true`
  `<`        Menor que           `2 < 7` → `true`
  `>=`       Maior ou igual      `5 >= 5` → `true`
  `<=`       Menor ou igual      `4 <= 3` → `false`

Prefira `===` e `!==` na maioria das comparações, pois comparam valor e
tipo sem fazer conversões implícitas.

``` js
console.log(5 === 5);   // true
console.log(5 === "5"); // false
console.log(5 == "5");  // true (conversão implícita)
```

Embora `==` exista, ele pode gerar resultados inesperados para quem está
começando. Prefira a igualdade estrita até entender bem as regras de
conversão.

### 4.4 Operadores lógicos

Eles combinam ou invertem condições.

  Operador   Nome          Regra simples
  ---------- ------------- ------------------------------------------------
  `&&`       E (*AND*)     Todas as condições precisam ser verdadeiras
  `\|\|`     OU (*OR*)     Pelo menos uma condição precisa ser verdadeira
  `!`        NÃO (*NOT*)   Inverte o valor lógico

Exemplo com `&&`:

``` js
const idade = 22;
const temIngresso = true;

const podeEntrar = idade >= 18 && temIngresso;

console.log(podeEntrar); // true
```

A pessoa só pode entrar se tiver pelo menos 18 anos **e** tiver
ingresso.

Exemplo com `||`:

``` js
const temCupom = false;
const temDescontoEspecial = true;

console.log(temCupom || temDescontoEspecial); // true
```

Basta uma das condições ser verdadeira.

Exemplo com `!`:

``` js
const estaChovendo = false;

console.log(!estaChovendo); // true
```

### 4.5 Tabela mental do E e do OU

-   `true && true` → `true`
-   `true && false` → `false`
-   `false && false` → `false`
-   `true || false` → `true`
-   `false || false` → `false`

Uma forma de lembrar: **E exige todas; OU exige pelo menos uma.**

### 4.6 Experimente a lógica booleana

`<LearningViz type_id="BOOLEAN_LOGIC" initial_values={{"inputA":true,"inputB":false,"operator":"and"}}/>`{=html}

Mude as entradas e o operador para observar como o resultado muda.

------------------------------------------------------------------------

## 5. Entrada e saída simples

**Entrada** é receber informação. **Saída** é apresentar informação.

### 5.1 Saída com `console.log()`

``` js
const nome = "Rafa";

console.log("Bem-vindo!");
console.log(nome);
console.log("Olá, " + nome);
```

É útil para testar o código e conferir valores enquanto o programa
executa.

### 5.2 Entrada com `prompt()` no navegador

`prompt()` abre uma caixa de diálogo para a pessoa digitar algo.

``` js
const nome = prompt("Qual é o seu nome?");

console.log("Olá, " + nome + "!");
```

**Importante:** `prompt()` retorna texto (`string`) ou `null` se a
pessoa cancelar. Mesmo que a pessoa digite um número, o resultado
normalmente será texto.

### 5.3 Convertendo a entrada para número

``` js
const resposta = prompt("Quantos anos você tem?");
const idade = Number(resposta);

console.log(idade + 1);
```

Se a pessoa digitar `20`, o resultado será `21`.

Sem `Number()`, a operação pode juntar texto em vez de somar:

``` js
const idadeTexto = "20";

console.log(idadeTexto + 1);        // "201"
console.log(Number(idadeTexto) + 1); // 21
```

Para uma aplicação real, também é importante validar se a entrada é
válida.

``` js
const texto = prompt("Digite um número:");
const numero = Number(texto);

if (texto !== null && texto.trim() !== "" && Number.isFinite(numero)) {
  console.log("Dobro:", numero * 2);
} else {
  console.log("Entrada inválida ou cancelada.");
}
```

### 5.4 Saída com `alert()`

`alert()` mostra uma mensagem em uma caixa de diálogo do navegador.

``` js
alert("Cadastro realizado!");
```

Use `alert()` para demonstrações muito simples. Em sites reais,
normalmente preferimos mostrar mensagens dentro da própria página, pois
caixas de diálogo podem interromper a navegação.

### 5.5 E no Node.js?

`prompt()` e `alert()` são APIs do navegador, não funções padrão
disponíveis diretamente em todo ambiente JavaScript. Em Node.js, a
entrada pode ser feita por ferramentas próprias, como `readline`. Por
enquanto, para começar rapidamente, use o console do navegador.

------------------------------------------------------------------------

## 6. Condicionais: `if`, `else` e `switch`

Condicionais permitem que o programa escolha o que fazer com base em uma
condição.

### 6.1 `if`

O bloco é executado se a condição for verdadeira.

``` js
const idade = 20;

if (idade >= 18) {
  console.log("Maior de idade");
}
```

### 6.2 `if` e `else`

`else` define o caminho alternativo quando a condição do `if` é falsa.

``` js
const idade = 16;

if (idade >= 18) {
  console.log("Pode entrar");
} else {
  console.log("Não pode entrar");
}
```

### 6.3 `else if`

Use `else if` quando há várias condições que precisam ser verificadas em
ordem.

``` js
const nota = 7;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 6) {
  console.log("Aprovado");
} else {
  console.log("Precisa estudar mais");
}
```

A ordem importa: assim que uma condição verdadeira é encontrada, o
restante dessa cadeia não é executado.

### 6.4 `switch`

`switch` é útil quando queremos comparar uma expressão com vários
valores específicos.

``` js
const opcao = 2;

switch (opcao) {
  case 1:
    console.log("Ver perfil");
    break;
  case 2:
    console.log("Editar perfil");
    break;
  case 3:
    console.log("Sair");
    break;
  default:
    console.log("Opção desconhecida");
}
```

O `break` impede que a execução continue para os próximos casos. Sem
ele, pode ocorrer *fall-through* --- a execução segue para o próximo
`case`. `default` é o caminho usado quando nenhum caso corresponde.

### 6.5 `if` ou `switch`: qual usar?

  -----------------------------------------------------------------------
  Situação                Melhor ponto de partida Por quê
  ----------------------- ----------------------- -----------------------
  Intervalos ou condições `if` / `else if`        Expressa comparações e
  complexas                                       combinações de
  (`idade >= 18`)                                 condições

  Vários valores exatos   `switch`                Organiza opções
  para a mesma expressão                          específicas
  (`opcao === 1`)                                 

  Apenas uma ou duas      `if`                    Geralmente é mais
  condições                                       direto

  Muitos casos que        `switch` pode ficar     Mantém as alternativas
  executam ações          mais legível            agrupadas
  diferentes                                      
  -----------------------------------------------------------------------

Os dois permitem tomar decisões. Não existe uma regra absoluta: escolha
a estrutura que deixa a intenção do código mais clara.

------------------------------------------------------------------------

## 7. Laços de repetição: `for` e `while`

Laços repetem um bloco de código. Eles evitam que precisemos copiar a
mesma instrução muitas vezes.

### 7.1 `for`

Use frequentemente `for` quando souber quantas repetições quer fazer ou
quando estiver percorrendo uma sequência com um contador.

``` js
for (let contador = 1; contador <= 5; contador++) {
  console.log(contador);
}
```

As três partes do `for` são:

1.  `let contador = 1`: inicializa o contador.
2.  `contador <= 5`: condição para continuar.
3.  `contador++`: aumenta o contador em um ao fim de cada repetição.

Saída:

``` text
1
2
3
4
5
```

Exemplo: somar os números de 1 a 5.

``` js
let soma = 0;

for (let numero = 1; numero <= 5; numero++) {
  soma = soma + numero;
}

console.log(soma); // 15
```

### 7.2 `while`

Use `while` quando a repetição deve continuar enquanto uma condição for
verdadeira, especialmente quando não sabemos de antemão quantas
repetições serão necessárias.

``` js
let bateria = 3;

while (bateria > 0) {
  console.log("Bateria restante:", bateria);
  bateria--;
}

console.log("Bateria descarregada");
```

A condição é verificada antes de cada repetição. Se for falsa logo no
início, o bloco pode não executar nenhuma vez.

### 7.3 Comparando `for` e `while`

  -----------------------------------------------------------------------
  Característica          `for`                   `while`
  ----------------------- ----------------------- -----------------------
  Bom para                Repetições contadas     Repetir até uma
                                                  condição mudar

  Controle do contador    Inicialização, condição Geralmente fica
                          e atualização ficam     separado do cabeçalho
                          juntas                  

  Pode repetir sem parar? Sim, se a condição      Sim, se a condição
                          nunca ficar falsa       nunca ficar falsa

  Exemplo                 Mostrar números de 1 a  Tentar novamente
                          10                      enquanto a senha
                                                  estiver incorreta
  -----------------------------------------------------------------------

**Ambos conseguem resolver muitos dos mesmos problemas.** A escolha
costuma ser sobre clareza e sobre como a repetição é controlada.

### 7.4 Exemplo de `while` com tentativas

``` js
let tentativas = 0;
const limite = 3;

while (tentativas < limite) {
  console.log("Tentativa:", tentativas + 1);
  tentativas++;
}
```

Em uma aplicação real, a condição poderia depender de uma resposta do
usuário, do estado de uma tarefa ou de um recurso disponível.

### 7.5 Cuidado com o loop infinito

Este código é perigoso porque a condição permanece verdadeira:

``` js
// NÃO execute sem interromper o programa:
// let contador = 1;
// while (contador <= 5) {
//   console.log(contador);
// }
```

O contador nunca aumenta, então `contador <= 5` nunca fica falso.

Uma regra prática: ao escrever um laço, identifique **qual mudança fará
a condição se tornar falsa**.

------------------------------------------------------------------------

## 8. Funções, parâmetros e retorno

Uma função é um bloco de código reutilizável que executa uma tarefa. Ela
ajuda a evitar repetição e a dar nomes às operações do programa.

### 8.1 Declarando e chamando uma função

``` js
function dizerOla() {
  console.log("Olá, PorQueDev!");
}

dizerOla();
dizerOla();
```

A definição cria a função. A chamada, escrita como `dizerOla()`, executa
o bloco.

### 8.2 Parâmetros e argumentos

Um **parâmetro** é uma variável declarada na definição da função. Um
**argumento** é o valor passado quando chamamos a função.

``` js
function cumprimentar(nome) {
  console.log(`Olá, ${nome}!`);
}

cumprimentar("Ana");
cumprimentar("Pedro");
```

Aqui, `nome` é o parâmetro. `"Ana"` e `"Pedro"` são argumentos.

### 8.3 Mais de um parâmetro

``` js
function somar(a, b) {
  console.log(a + b);
}

somar(4, 6); // 10
somar(10, 5); // 15
```

A função recebe dois valores e realiza uma operação com eles.

### 8.4 Retorno com `return`

`return` entrega um resultado para quem chamou a função. Isso é
diferente de apenas mostrar algo com `console.log()`.

``` js
function somar(a, b) {
  return a + b;
}

const resultado = somar(4, 6);

console.log(resultado); // 10
```

O resultado pode ser guardado, comparado ou usado em outro cálculo.

``` js
function calcularDobro(numero) {
  return numero * 2;
}

const valor = calcularDobro(7);
const total = valor + 3;

console.log(total); // 17
```

### 8.5 `console.log()` não é `return`

Esta diferença é essencial:

``` js
function mostrarSoma(a, b) {
  console.log(a + b);
}

function obterSoma(a, b) {
  return a + b;
}

const resultado1 = mostrarSoma(2, 3); // mostra 5
console.log(resultado1);              // undefined

const resultado2 = obterSoma(2, 3);
console.log(resultado2);              // 5
```

-   `console.log()` exibe um valor no console.
-   `return` devolve um valor à parte do programa que chamou a função.
-   Quando uma função não retorna explicitamente um valor, o resultado
    da chamada é `undefined`.

### 8.6 Função com decisão

``` js
function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

console.log(ehMaiorDeIdade(20)); // true
console.log(ehMaiorDeIdade(15)); // false
```

Essa função recebe uma idade e retorna uma resposta booleana. Ela pode
ser reutilizada em diferentes partes do programa.

### 8.7 Quando vale a pena criar uma função?

Crie uma função quando:

-   Uma tarefa precisa ser repetida em vários lugares.
-   Um trecho tem uma responsabilidade clara.
-   Você quer dar um nome significativo a uma operação.
-   Quer separar um problema grande em partes menores e mais fáceis de
    testar.

Evite criar funções sem necessidade para operações triviais que só
acontecem uma vez. O objetivo é tornar o código mais claro, não apenas
aumentar a quantidade de funções.

------------------------------------------------------------------------

## 9. Exemplo integrador

O exemplo combina variáveis, entrada, conversão de tipos, operadores,
condicionais e funções.

``` js
function classificarIdade(idade) {
  if (idade < 0) {
    return "Idade inválida";
  } else if (idade < 18) {
    return "Menor de idade";
  } else {
    return "Maior de idade";
  }
}

const resposta = prompt("Digite sua idade:");

if (resposta !== null && resposta.trim() !== "") {
  const idade = Number(resposta);

  if (Number.isFinite(idade)) {
    const classificacao = classificarIdade(idade);
    console.log(classificacao);
    alert(classificacao);
  } else {
    console.log("Digite um número válido.");
  }
} else {
  console.log("Entrada cancelada ou vazia.");
}
```

### Como o programa funciona?

1.  A função `classificarIdade` recebe uma idade.
2.  A estrutura `if` verifica em qual categoria ela se encaixa.
3.  `prompt()` solicita uma entrada de texto.
4.  O programa verifica se a entrada foi cancelada ou ficou vazia.
5.  `Number()` converte o texto para número.
6.  `Number.isFinite()` verifica se o resultado é um número finito
    válido.
7.  A função retorna uma classificação, que é exibida no console e em um
    alerta.

**Experimento:** altere a função para classificar crianças (até 12
anos), adolescentes (13 a 17) e adultos (18 ou mais). Teste também
entradas como texto, campo vazio e cancelamento.

------------------------------------------------------------------------

## 10. Erros comuns

### Erro 1 --- tentar reatribuir uma `const`

``` js
const pontos = 10;
pontos = 20; // Erro
```

**Como evitar:** use `let` quando precisar reatribuir o valor.

### Erro 2 --- confundir texto e número

``` js
console.log("10" + 5); // "105"
```

**Como evitar:** converta entradas numéricas com `Number()` e valide o
resultado.

### Erro 3 --- usar `=` em vez de `===` numa comparação

-   `=` atribui um valor.
-   `===` compara dois valores sem conversão de tipo.

``` js
const numero = 5;
console.log(numero === 5); // true
```

### Erro 4 --- esquecer o `break` no `switch`

Sem `break`, o programa pode executar os casos seguintes também. Use-o
quando quiser encerrar o caso atual.

### Erro 5 --- criar um laço infinito

Confira se a condição pode se tornar falsa e se a variável de controle
está sendo atualizada.

### Erro 6 --- esperar que `console.log()` retorne um valor

Mostrar um resultado não significa devolvê-lo. Use `return` quando outra
parte do programa precisar receber o valor.

### Erro 7 --- esquecer que `prompt()` pode retornar `null`

A pessoa pode cancelar a caixa de diálogo. Considere esse caso antes de
usar o resultado.

------------------------------------------------------------------------

## 11. Exercícios práticos

Tente resolver cada exercício antes de consultar os exemplos anteriores.
Escreva o código no editor, execute e confira o resultado.

### Nível 1 --- compreender os fundamentos

-   [ ] **Exercício 1 --- Apresentação:** crie constantes para nome e
    cidade e mostre uma frase no console.
-   [ ] **Exercício 2 --- Tipos:** crie um exemplo de `string`,
    `number`, `boolean`, `null` e `undefined`. Use `typeof` para
    investigar os tipos.
-   [ ] **Exercício 3 --- Calculadora:** declare dois números e mostre a
    soma, subtração, multiplicação e divisão.
-   [ ] **Exercício 4 --- Par ou ímpar:** use `%` e `if/else` para
    identificar se um número é par.

### Nível 2 --- tomar decisões e repetir

-   [ ] **Exercício 5 --- Maioridade:** leia uma idade com `prompt()`,
    converta para número e informe se a pessoa é maior de idade.
-   [ ] **Exercício 6 --- Nota:** use `if/else if/else` para classificar
    uma nota: abaixo de 6, "Reprovado"; de 6 até menos de 9, "Aprovado";
    9 ou mais, "Excelente".
-   [ ] **Exercício 7 --- Menu:** use `switch` para tratar opções 1, 2 e
    3 e mostrar uma mensagem diferente para cada uma.
-   [ ] **Exercício 8 --- Contagem:** use `for` para mostrar os números
    de 1 a 20.
-   [ ] **Exercício 9 --- Tentativas:** use `while` para repetir uma
    ação três vezes. Garanta que a condição termine.

### Nível 3 --- funções

-   [ ] **Exercício 10 --- Dobro:** crie `calcularDobro(numero)`, que
    retorna o dobro do número.
-   [ ] **Exercício 11 --- Maior número:** crie uma função que receba
    dois números e retorne o maior.
-   [ ] **Exercício 12 --- Conversor:** crie uma função que receba uma
    temperatura em Celsius e retorne Fahrenheit usando
    `F = C * 9 / 5 + 32`.

### Como praticar cada exercício

1.  Leia o enunciado e explique com suas palavras o que o programa
    precisa fazer.
2.  Escreva os passos em português antes de codificar.
3.  Transforme os passos em JavaScript.
4.  Execute o código e teste pelo menos três valores diferentes.
5.  Se der erro, leia a mensagem e investigue a causa.
6.  Explique em voz alta como sua solução funciona.

------------------------------------------------------------------------

## 12. Desafio do dia

### Mini projeto: calculadora de compra

Crie um programa que:

1.  Peça o nome de um produto.
2.  Peça o preço unitário e a quantidade.
3.  Converta preço e quantidade para números.
4.  Calcule o total usando uma função.
5.  Informe se a compra custa menos de R\$ 100 ou custa R\$ 100 ou mais.
6.  Mostre um resumo com o nome do produto, a quantidade e o total.

**Requisitos:**

-   [ ] Use `const` sempre que não precisar reatribuir a variável.
-   [ ] Use `let` apenas quando o valor precisar mudar.
-   [ ] Use pelo menos uma função com parâmetros e `return`.
-   [ ] Valide entradas vazias, canceladas ou numéricas inválidas.
-   [ ] Use uma condicional para classificar o valor da compra.
-   [ ] Mostre o resumo com `console.log()`.

**Dica:** divida o desafio em pequenas partes. Primeiro leia os dados,
depois calcule o total, em seguida classifique o valor e, por último,
mostre o resumo.

------------------------------------------------------------------------

## 13. Resumo para revisão

  Conceito      Para lembrar
  ------------- -----------------------------------------------------------
  `let`         Variável que pode receber outro valor
  `const`       Variável que não pode ser reatribuída
  `string`      Texto
  `number`      Número inteiro ou decimal
  `boolean`     `true` ou `false`
  `null`        Ausência intencional de valor
  `undefined`   Valor ainda não atribuído/disponível
  Aritméticos   Fazem cálculos
  Comparação    Produz `true` ou `false`
  Lógicos       Combinam ou invertem condições
  Entrada       Recebe dados, por exemplo `prompt()` no navegador
  Saída         Exibe dados, por exemplo `console.log()`
  `if/else`     Escolhe caminhos conforme condições
  `switch`      Organiza alternativas para valores específicos
  `for`         Frequentemente usado com contador ou quantidade conhecida
  `while`       Repete enquanto uma condição for verdadeira
  Parâmetro     Nome que recebe um valor na função
  Argumento     Valor passado na chamada
  `return`      Devolve um resultado

### Perguntas para verificar se entendeu

-   [ ] Sei explicar a diferença entre `let` e `const`?
-   [ ] Sei diferenciar `null` de `undefined`?
-   [ ] Entendo por que `"5" + 2` resulta em `"52"`?
-   [ ] Sei quando escolher `if/else` e quando `switch` deixa o código
    mais claro?
-   [ ] Consigo explicar quando usar `for` e quando usar `while`?
-   [ ] Sei a diferença entre mostrar um valor com `console.log()` e
    devolvê-lo com `return`?
-   [ ] Consigo escrever uma função simples sem copiar um exemplo?

------------------------------------------------------------------------

## 14. Checklist de progresso

### Estudo

-   [ ] Li as explicações e executei os exemplos.
-   [ ] Alterei os valores para observar o que muda.
-   [ ] Fiz os exercícios de nível 1.
-   [ ] Fiz os exercícios de nível 2.
-   [ ] Fiz os exercícios de nível 3.
-   [ ] Concluí ou iniciei o mini projeto.

### Reflexão

**O que entendi bem?**

> Escreva aqui os conceitos que você consegue explicar sem consultar o
> material.

**O que preciso revisar?**

> Anote dúvidas, erros encontrados e exemplos que ainda parecem
> confusos.

**O que aprendi ao resolver um erro?**

> Registre o problema, a causa e como você o corrigiu.

------------------------------------------------------------------------

## Próximo passo

Depois de concluir este material, revise os conceitos que ainda geram
dúvidas e tente reconstruir o mini projeto sem olhar o código anterior.
A prática de lembrar e escrever por conta própria ajuda a consolidar o
aprendizado.

**Lembre-se:** não é necessário dominar tudo de primeira. O objetivo de
hoje é criar uma base compreensível e praticar um pouco de cada
conceito.
