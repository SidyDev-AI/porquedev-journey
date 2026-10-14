# PorQueDev — Trilha de Estudos em Desenvolvimento de Software

> Um plano de estudos prático, progressivo e editável para aprender desenvolvimento de software, sites e sistemas com **2 horas por dia**.
>
> **Duração inicial:** 24 semanas (aproximadamente 6 meses)  
> **Nível de partida:** já conheço alguns conceitos, mas preciso revisar a base  
> **Linguagem principal:** JavaScript  
> **Objetivo:** construir fundamentos sólidos, desenvolver projetos reais e organizar um portfólio versionado com Git.

---

## Sumário

- [1. Nome da pasta e organização do repositório](#1-nome-da-pasta-e-organização-do-repositório)
- [2. Objetivos e regras de estudo](#2-objetivos-e-regras-de-estudo)
- [3. Rotina diária de duas horas](#3-rotina-diária-de-duas-horas)
- [4. Preparação do ambiente](#4-preparação-do-ambiente)
- [5. Estrutura sugerida para a pasta](#5-estrutura-sugerida-para-a-pasta)
- [6. Plano completo de 24 semanas](#6-plano-completo-de-24-semanas)
- [7. Projetos do portfólio](#7-projetos-do-portfólio)
- [8. Git e GitHub: fluxo de trabalho](#8-git-e-github-fluxo-de-trabalho)
- [9. Como estudar e usar o ChatGPT](#9-como-estudar-e-usar-o-chatgpt)
- [10. Critérios para avançar de fase](#10-critérios-para-avançar-de-fase)
- [11. Checklist de progresso](#11-checklist-de-progresso)
- [12. Registro diário de estudos](#12-registro-diário-de-estudos)
- [13. Glossário inicial](#13-glossário-inicial)
- [14. Links úteis](#14-links-úteis)

---

## 1. Nome da pasta e organização do repositório

### Nome recomendado

Use:

```text
porquedev-journey
```

O nome é curto, legível, fácil de usar em comandos e deixa claro que o repositório contém sua trilha de aprendizado. Evite espaços, acentos e letras maiúsculas em nomes de pastas de projetos.

### Criando a pasta

No terminal, execute:

```bash
mkdir porquedev-journey
cd porquedev-journey
git init
```

Crie este arquivo com o nome `README.md` na raiz da pasta. Ele será o documento principal da sua jornada.

> **Importante:** a pasta principal serve para organizar o plano e os projetos. Cada projeto terá sua própria subpasta. Inicialmente, você pode manter tudo em um único repositório (“monorepo” de estudos). Mais tarde, se algum projeto crescer ou precisar de um portfólio independente, poderá movê-lo para um repositório próprio.

### Estrutura sugerida

```text
porquedev-journey/
├── README.md
├── .gitignore
├── diario/
│   ├── README.md
│   └── modelos/
│       └── registro-diario.md
├── fundamentos/
│   ├── semana-01-logica/
│   ├── semana-02-arrays-objetos/
│   └── semana-03-funcoes-erros-testes/
├── projetos/
│   ├── 01-controle-financeiro/
│   ├── 02-portfolio-pessoal/
│   ├── 03-gerenciador-tarefas/
│   └── 04-sistema-pequeno-negocio/
├── desafios/
│   ├── README.md
│   └── resolvidos/
└── recursos/
    └── README.md
```

Você não precisa criar todas essas pastas no primeiro dia. Crie cada pasta quando chegar à fase correspondente. Essa estrutura é uma referência, não uma obrigação.

### Princípios de organização

- `README.md`: plano principal, metas, progresso e links para os projetos.
- `diario/`: anotações curtas sobre o que estudou, dúvidas e próximos passos.
- `fundamentos/`: exercícios pequenos e experimentos usados para praticar conceitos.
- `projetos/`: projetos maiores, com um README próprio em cada projeto.
- `desafios/`: problemas extras e suas soluções.
- `recursos/`: links, referências e resumos próprios.

**Regra:** cada projeto deve explicar o problema que resolve, como executar, o que você aprendeu e quais melhorias pretende fazer.

---

## 2. Objetivos e regras de estudo

### Ao final das 24 semanas, busco conseguir:

- [ ] Explicar e aplicar variáveis, tipos, condicionais, laços e funções.
- [ ] Manipular arrays e objetos para resolver problemas.
- [ ] Escrever código dividido em funções e módulos compreensíveis.
- [ ] Depurar erros usando mensagens, console e ferramentas do editor.
- [ ] Criar páginas web com HTML semântico e CSS responsivo.
- [ ] Manipular o DOM e responder a eventos com JavaScript.
- [ ] Consumir uma API e lidar com respostas assíncronas.
- [ ] Criar uma API básica com Python.
- [ ] Modelar dados e executar consultas SQL.
- [ ] Integrar frontend, backend e banco de dados em um projeto.
- [ ] Usar Git para registrar mudanças e GitHub para publicar repositórios.
- [ ] Documentar, testar e apresentar meus projetos.

Esses resultados são metas de referência. O importante é demonstrar as habilidades construindo coisas, não apenas concluir semanas no calendário.

### Regras pessoais

1. **Programar todos os dias de estudo.** Mesmo que seja um exercício pequeno.
2. **Tentar antes de consultar a resposta.** Dedique de 10 a 20 minutos para pensar no problema.
3. **Não copiar sem compreender.** Se copiar um exemplo, feche a referência e reescreva com suas palavras.
4. **Registrar dúvidas.** Uma dúvida registrada pode virar o primeiro exercício do próximo dia.
5. **Revisar regularmente.** Refaça exercícios antigos sem consultar a solução.
6. **Priorizar compreensão, não velocidade.** Se uma semana estiver difícil, estenda-a.
7. **Manter os projetos executáveis.** Faça pequenas entregas funcionais em vez de acumular código inacabado.
8. **Usar documentação oficial.** Tutoriais ajudam, mas a documentação ensina a encontrar respostas.
9. **Não publicar segredos.** Nunca envie senhas, tokens, chaves de API ou arquivos `.env` ao Git.
10. **Pedir ajuda com contexto.** Ao pedir ajuda, mostre o objetivo, o código relevante, o erro completo e o que já tentou.

---

## 3. Rotina diária de duas horas

Use esta rotina como padrão. Ajuste os blocos se perceber que aprende melhor de outra forma.

| Duração | Atividade | Como executar |
|---|---|---|
| 20 min | Revisão ativa | Tente explicar o conteúdo anterior sem olhar as anotações. |
| 35 min | Teoria e exemplos | Estude um conceito por vez e faça exemplos curtos. |
| 50 min | Prática | Resolva exercícios ou implemente uma funcionalidade do projeto. |
| 15 min | Registro e Git | Anote o que aprendeu, dúvidas e próximo passo; registre mudanças quando fizer sentido. |
| **120 min** | **Total** | **2 horas** |

### Exemplo de sessão

1. Defina uma meta pequena: “Hoje vou aprender `filter()` e usá-lo para filtrar produtos”.
2. Leia a documentação ou uma explicação confiável.
3. Escreva um exemplo mínimo.
4. Faça pelo menos três variações sem copiar.
5. Teste um caso normal, um caso vazio e um caso inesperado.
6. Registre uma frase explicando o conceito com suas próprias palavras.
7. Faça commit se tiver uma alteração significativa e funcional.

### Dia de revisão

Uma vez por semana, reserve a sessão para:
- refazer exercícios sem olhar as respostas;
- revisar bugs e soluções;
- atualizar o checklist;
- organizar arquivos;
- escrever o que ainda está confuso;
- planejar a próxima semana.

Se preferir descansar um dia por semana, use seis dias de duas horas (12 horas semanais) e estenda o calendário. Consistência sustentável é melhor do que tentar compensar tudo em um único dia.

---

## 4. Preparação do ambiente

### Ferramentas principais

- **Editor:** [Visual Studio Code](https://code.visualstudio.com/)
- **JavaScript (front-end):** [Node.js — site oficial](https://nodejs.org/)
- **Python (back-end):** [Python — site oficial](https://www.python.org/)
- **Controle de versão:** [Git](https://git-scm.com/)
- **Hospedagem de repositórios:** [GitHub](https://github.com/)
- **Documentação web:** [MDN Web Docs em português](https://developer.mozilla.org/pt-BR/)
- **Prática guiada:** [freeCodeCamp](https://www.freecodecamp.org/)

Use versões estáveis/LTS quando disponíveis e siga as instruções oficiais de instalação para seu sistema operacional.

### Verificar as instalações

Depois de instalar Node.js, Python e Git, abra um terminal e execute:

```bash
node --version
npm --version
python --version
git --version
```

Cada comando deve exibir uma versão instalada. Se algum comando não for reconhecido, confira a instalação e se o terminal foi reaberto depois dela.

### Configurar a identidade do Git

Use o nome e o e-mail que deseja associar aos commits:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@example.com"
```

Substitua os valores de exemplo pelos seus dados. Se quiser proteger seu e-mail pessoal no GitHub, confira as opções de endereço privado oferecidas pela plataforma.

### Criar um `.gitignore`

Crie um arquivo `.gitignore` na raiz. Para projetos JavaScript/Node.js, um começo útil é:

```gitignore
node_modules/
.env
.env.*
!.env.example
dist/
coverage/
.DS_Store
Thumbs.db
```

Adapte-o conforme as tecnologias usadas. Não ignore arquivos de configuração necessários para reproduzir o projeto. Nunca versione segredos reais.

### Primeiro commit

Depois de criar o `README.md` e o `.gitignore`:

```bash
git add README.md .gitignore
git commit -m "docs: iniciar trilha de estudos PorQueDev"
```

Se ainda não criou o arquivo `.gitignore`, adicione-o depois e faça outro commit. Você pode consultar `git status` a qualquer momento para entender o estado do repositório.

---

## 5. Estrutura sugerida para a pasta

### Padrão para exercícios

Mantenha exercícios pequenos e com nomes descritivos:

```text
fundamentos/
└── semana-01-logica/
    ├── README.md
    ├── 01-variaveis.js
    ├── 02-condicionais.js
    ├── 03-lacos.js
    ├── 04-funcoes.js
    └── 05-calculadora.js
```

### Padrão para cada projeto

```text
projetos/
└── 01-controle-financeiro/
    ├── README.md
    ├── src/
    ├── tests/
    └── .gitignore
```

A estrutura muda conforme o projeto evolui. Não crie diretórios vazios só para seguir um modelo; crie-os quando houver conteúdo para colocar neles.

### Modelo de README de projeto

Copie este modelo para cada novo projeto:

```markdown
# Nome do Projeto

## Objetivo
Que problema este projeto resolve?

## Funcionalidades
- [ ] Funcionalidade 1
- [ ] Funcionalidade 2
- [ ] Funcionalidade 3

## Tecnologias
Liste as linguagens, ferramentas e bibliotecas utilizadas.

## Pré-requisitos
O que precisa estar instalado?

## Como executar
Explique os comandos necessários para instalar dependências e iniciar o projeto.

## Como testar
Explique como executar os testes ou verificar manualmente as funcionalidades.

## Aprendizados
O que aprendi ao construir este projeto?

## Decisões técnicas
Que escolhas fiz e por quê?

## Próximas melhorias
- [ ] Melhoria 1
- [ ] Melhoria 2

## Limitações conhecidas
O que ainda não funciona ou não foi implementado?
```

---

## 6. Plano completo de 24 semanas

O plano usa JavaScript como linguagem principal.

### Fase 1 — Fundamentos de programação (semanas 1 a 4)

**Objetivo:** recuperar a lógica e aprender a transformar problemas em passos executáveis.

#### Semana 1 — Variáveis, tipos, operadores e lógica

Estudar:
- variáveis e constantes (`let` e `const`);
- tipos primitivos: string, number, boolean, `null` e `undefined`;
- operadores aritméticos, comparação e lógica booleana;
- entrada e saída simples;
- condicionais `if`, `else` e `switch`;
- laços `for` e `while`;
- funções, parâmetros e retorno.

Exercícios:
- converter Celsius para Fahrenheit;
- calcular média de notas;
- verificar se um número é par;
- encontrar o maior de três números;
- imprimir uma tabuada;
- calcular fatorial de um número pequeno;
- validar se uma entrada é aceitável.

**Entrega da semana:** calculadora no terminal com soma, subtração, multiplicação e divisão, incluindo validação da operação e divisão por zero.

#### Semana 2 — Arrays, objetos e manipulação de dados

Estudar:
- índices e tamanho de arrays;
- adicionar, remover e percorrer elementos;
- objetos, propriedades e métodos;
- `map()`, `filter()`, `find()` e `reduce()`;
- strings e métodos úteis;
- diferença entre modificar dados e criar novos arrays;
- noções iniciais de custo de uma solução.

Exercícios:
- somar valores de um array;
- encontrar o maior e o menor número;
- filtrar produtos por preço;
- procurar um produto pelo nome;
- calcular o total de um carrinho;
- agrupar despesas por categoria;
- ordenar uma lista por preço.

**Entrega da semana:** programa de estoque em memória, com produtos, preços, quantidades, busca e total de estoque.

#### Semana 3 — Funções, organização, erros e depuração

Estudar:
- responsabilidade única de uma função;
- parâmetros, retornos e escopo;
- separar lógica de entrada/saída;
- mensagens de erro e validação;
- depuração com breakpoints;
- casos de teste e casos extremos;
- refatoração: melhorar o código sem mudar seu comportamento.

Exercícios:
- dividir a calculadora em funções;
- validar valores ausentes ou inválidos;
- testar listas vazias;
- lidar com números negativos;
- corrigir funções com bugs intencionais;
- reescrever uma função longa em funções menores.

**Entrega da semana:** calculadora refatorada e um conjunto de casos de teste documentados.

#### Semana 4 — Projeto 1: controle financeiro no terminal

Funcionalidades mínimas:
- registrar receita ou despesa;
- armazenar descrição, valor, categoria e tipo;
- listar lançamentos;
- calcular saldo;
- somar despesas por categoria;
- validar valores e entradas inválidas.

Ordem recomendada:
1. Desenhar como os dados serão representados.
2. Implementar o cadastro de um lançamento.
3. Implementar a listagem.
4. Implementar os cálculos.
5. Adicionar validações.
6. Testar casos normais e extremos.
7. Escrever o README.
8. Fazer commit das etapas funcionais.

**Não é necessário criar interface gráfica nem banco de dados nesta fase.** O foco é lógica, funções e organização.

### Fase 2 — Fundamentos da web (semanas 5 a 8)

**Objetivo:** construir páginas acessíveis e responsivas que funcionem no navegador.

#### Semana 5 — HTML

Estudar:
- estrutura de um documento HTML;
- títulos, parágrafos, links e imagens;
- listas, tabelas e formulários;
- elementos semânticos;
- atributos e validação básica;
- acessibilidade inicial: rótulos, textos alternativos e hierarquia de títulos.

Exercícios:
- criar uma página de apresentação;
- montar uma lista de projetos;
- criar formulário de contato com labels;
- estruturar uma página usando elementos semânticos.

**Entrega:** primeira versão HTML do seu portfólio.

#### Semana 6 — CSS

Estudar:
- seletores, cascata e especificidade;
- modelo de caixa;
- margens, padding, bordas e dimensões;
- tipografia e cores;
- Flexbox e CSS Grid;
- unidades relativas;
- media queries e layout responsivo.

Exercícios:
- estilizar cartões de projetos;
- montar uma navegação;
- criar uma grade responsiva;
- ajustar a página para telas pequenas;
- testar contraste e legibilidade.

**Entrega:** portfólio responsivo, mesmo que ainda não tenha funcionalidades JavaScript.

#### Semana 7 — JavaScript no navegador

Estudar:
- selecionar elementos do DOM;
- eventos de clique e formulário;
- ler e atualizar valores;
- criar e remover elementos;
- validação de formulário;
- separar estrutura (HTML), apresentação (CSS) e comportamento (JavaScript).

Exercícios:
- contador interativo;
- alternar tema claro/escuro;
- validar formulário;
- adicionar e remover itens de uma lista;
- mostrar mensagens de erro compreensíveis.

**Entrega:** página interativa com pelo menos duas funcionalidades.

#### Semana 8 — Projeto 2: lista de tarefas

Funcionalidades mínimas:
- adicionar tarefa;
- marcar tarefa como concluída;
- excluir tarefa;
- filtrar tarefas;
- validar tarefa vazia;
- salvar e recuperar tarefas usando `localStorage`;
- layout responsivo.

Critérios de qualidade:
- usar HTML semântico;
- permitir interação por teclado sempre que possível;
- exibir estados vazios;
- manter código organizado;
- testar recarregamento e dados inválidos;
- documentar limitações.

**Entrega:** lista de tarefas funcional no navegador. O `localStorage` é armazenamento local do navegador, não um banco de dados compartilhado entre usuários.

### Fase 3 — JavaScript aplicado e APIs (semanas 9 a 12)

**Objetivo:** aprender a trabalhar com módulos, operações assíncronas e dados externos.

#### Semana 9 — JavaScript moderno e módulos

Estudar:
- `const` e `let`;
- arrow functions;
- template literals;
- desestruturação;
- spread/rest;
- importação e exportação de módulos;
- organização por responsabilidade.

Exercícios:
- dividir um projeto em módulos;
- criar um módulo de cálculos;
- importar funções em outro arquivo;
- refatorar código repetido.

**Entrega:** reorganizar o projeto de tarefas ou controle financeiro em módulos quando isso fizer sentido.

#### Semana 10 — Assincronismo e APIs

Estudar:
- o que significa código assíncrono;
- Promises;
- `async` e `await`;
- `fetch()`;
- JSON;
- status de respostas HTTP;
- `try/catch`;
- estados de carregamento, sucesso e erro.

Exercícios:
- consultar uma API pública apropriada;
- mostrar indicador de carregamento;
- tratar falha de conexão;
- lidar com resposta vazia;
- apresentar os dados na interface.

**Entrega:** uma página que consome uma API e trata erros de forma clara.

#### Semana 11 — Ferramentas de desenvolvimento e testes

Estudar:
- console e DevTools do navegador;
- breakpoints;
- stack traces;
- testes unitários e testes manuais;
- dados de teste;
- npm e `package.json`;
- dependências e scripts.

Exercícios:
- investigar três bugs;
- testar funções de cálculo;
- adicionar scripts de execução;
- documentar como reproduzir um erro;
- separar funções puras de funções que interagem com a interface.

**Entrega:** projeto com instruções claras de execução e verificações reproduzíveis.

#### Semana 12 — Projeto 3, parte inicial: painel de dados

Escolha uma API pública e adequada para prática. Antes de depender dela, verifique sua documentação, disponibilidade, limites e necessidade de chave.

Funcionalidades:
- fazer uma consulta;
- mostrar carregamento;
- apresentar dados;
- lidar com falha;
- permitir nova consulta ou filtro;
- organizar o código em módulos.

**Entrega:** painel web documentado que consulta uma API externa. Não coloque chaves secretas no frontend nem no repositório.

### Fase 4 — Backend e banco de dados (semanas 13 a 16)

**Objetivo:** entender como um servidor recebe solicitações, processa regras e persiste dados.

#### Semana 13 — Node.js e HTTP

Estudar:
- diferença entre navegador e ambiente de servidor;
- executar JavaScript com Node.js;
- npm e scripts;
- variáveis de ambiente;
- noções de HTTP, métodos e códigos de status;
- módulos no Node.js.

Exercícios:
- executar um arquivo JavaScript no terminal;
- criar scripts npm;
- ler configurações sem colocá-las diretamente no código;
- explicar o papel de cliente e servidor.

**Entrega:** pequeno programa Node.js com instruções de execução.

#### Semana 14 — APIs REST

Estudar:
- recursos e rotas;
- métodos GET, POST, PATCH/PUT e DELETE;
- parâmetros de rota e query string;
- corpo JSON;
- códigos de status;
- validação de entrada;
- mensagens de erro consistentes.

Exercícios:
- desenhar rotas para tarefas;
- implementar operações CRUD;
- testar requisições com uma ferramenta apropriada;
- rejeitar entradas inválidas;
- retornar status HTTP coerentes.

**Entrega:** API básica de tarefas. Pode começar com dados em memória, deixando explícito que eles serão perdidos quando o processo reiniciar.

#### Semana 15 — SQL e modelagem relacional

Estudar:
- tabelas, linhas e colunas;
- chaves primárias e estrangeiras;
- tipos de dados;
- `SELECT`, `INSERT`, `UPDATE` e `DELETE`;
- `WHERE`, `ORDER BY` e `GROUP BY`;
- relacionamentos;
- restrições e integridade dos dados.

Exercícios:
- desenhar tabelas para tarefas e usuários;
- inserir e consultar registros;
- filtrar e ordenar resultados;
- relacionar duas tabelas;
- escrever consultas para relatórios simples.

**Entrega:** esquema de banco de dados e conjunto de consultas SQL documentadas.

#### Semana 16 — Persistência e segurança básica

Estudar:
- conectar a API a um banco SQL;
- variáveis de ambiente;
- consultas parametrizadas;
- validação no servidor;
- tratamento de erros;
- noções de autenticação e autorização;
- hash seguro de senhas por biblioteca apropriada;
- princípio do menor privilégio.

Exercícios:
- salvar tarefas no banco;
- reiniciar o servidor e verificar persistência;
- validar entradas;
- evitar concatenar valores do usuário diretamente em SQL;
- proteger configurações e credenciais.

**Entrega:** API de tarefas que persiste dados. Se incluir autenticação, não armazene senhas em texto puro e não invente seu próprio algoritmo de hash.

### Fase 5 — Integração e sistemas completos (semanas 17 a 20)

**Objetivo:** conectar as partes e desenvolver uma aplicação mais próxima de um sistema real.

#### Semana 17 — Integração frontend/backend

Estudar:
- chamadas do frontend para sua API;
- estados de carregamento, sucesso e falha;
- CORS em nível introdutório;
- validação no cliente e no servidor;
- configuração de URLs;
- organização de responsabilidades.

Exercícios:
- listar dados recebidos da API;
- cadastrar um item;
- editar e excluir um item;
- exibir erros retornados pelo servidor.

**Entrega:** interface web conectada à API de tarefas.

#### Semana 18 — Introdução a React

Estudar:
- componentes;
- props;
- estado;
- eventos;
- renderização de listas;
- formulários;
- efeitos e chamadas externas quando apropriado;
- organização básica de componentes.

Exercícios:
- transformar cartões em componentes;
- criar formulário controlado;
- renderizar uma lista;
- separar componentes por responsabilidade.

**Entrega:** pequena interface em React. Não avance para bibliotecas adicionais até compreender componentes, props e estado.

#### Semana 19 — Testes, qualidade e manutenção

Estudar:
- testes unitários e de integração;
- cenários positivos e negativos;
- nomes descritivos;
- tratamento de erros;
- lint/formatadores quando fizerem sentido;
- revisão de código;
- documentação de decisões.

Exercícios:
- testar regras de negócio;
- testar validações;
- reproduzir e corrigir bugs;
- revisar funções grandes;
- remover código morto.

**Entrega:** testes para as regras principais do sistema e lista de limitações conhecidas.

#### Semana 20 — Preparação para publicação

Estudar:
- build e configuração;
- variáveis de ambiente em produção;
- logs e diagnóstico;
- diferenças entre desenvolvimento e produção;
- documentação de instalação;
- noções de deploy e segurança.

Exercícios:
- preparar uma versão reproduzível;
- revisar dependências;
- verificar se segredos foram excluídos;
- criar instruções de execução;
- conferir se o projeto funciona a partir de um clone limpo.

**Entrega:** versão candidata a publicação do gerenciador de tarefas.

### Fase 6 — Projeto final e portfólio (semanas 21 a 24)

**Objetivo:** construir, revisar e apresentar um sistema que demonstre suas habilidades.

#### Semana 21 — Planejamento do sistema

Escolha um pequeno negócio ou problema que conheça. Defina:
- quem usará o sistema;
- qual problema ele resolve;
- quais funcionalidades são essenciais;
- quais dados precisam ser guardados;
- quais telas e rotas serão necessárias;
- o que ficará fora da primeira versão.

**Entrega:** documento curto de requisitos e desenho inicial dos dados.

#### Semana 22 — Implementação do núcleo

Priorize o fluxo mais importante. Por exemplo:
- cadastrar produto;
- listar produtos;
- atualizar estoque;
- registrar uma venda;
- validar entradas.

Implemente uma funcionalidade por vez e mantenha a aplicação executável.

**Entrega:** fluxo principal funcionando, mesmo que a interface ainda seja simples.

#### Semana 23 — Qualidade e melhorias

- corrigir bugs;
- melhorar mensagens de erro;
- testar regras de negócio;
- revisar acessibilidade e responsividade;
- conferir segurança básica;
- revisar nomes, organização e documentação;
- registrar limitações.

**Entrega:** versão estável para demonstração.

#### Semana 24 — Documentação e apresentação

- escrever README completo;
- adicionar instruções de instalação e execução;
- incluir capturas de tela próprias, se úteis;
- explicar arquitetura e decisões técnicas;
- listar funcionalidades concluídas e pendentes;
- publicar o repositório;
- praticar uma apresentação de 3 a 5 minutos.

**Entrega:** projeto de portfólio documentado, executável e apresentável.

---

## 7. Projetos do portfólio

### Projeto 1 — Controle financeiro no terminal

**Objetivo:** praticar lógica, funções, arrays, objetos e validação.

Funcionalidades mínimas:
- [ ] Cadastrar receita.
- [ ] Cadastrar despesa.
- [ ] Listar lançamentos.
- [ ] Calcular saldo.
- [ ] Somar despesas por categoria.
- [ ] Validar valores e entradas.
- [ ] Documentar como executar.

Melhorias futuras:
- [ ] Persistir dados em arquivo ou banco de dados.
- [ ] Adicionar testes automatizados.
- [ ] Criar uma interface web.

### Projeto 2 — Portfólio pessoal e página interativa

**Objetivo:** praticar HTML, CSS, JavaScript e responsividade.

Funcionalidades mínimas:
- [ ] Apresentação pessoal.
- [ ] Seção de projetos.
- [ ] Seção de habilidades.
- [ ] Contato ou links profissionais.
- [ ] Layout responsivo.
- [ ] Navegação acessível.
- [ ] Publicação em hospedagem apropriada.

Melhorias futuras:
- [ ] Tema claro/escuro.
- [ ] Filtros de projetos.
- [ ] Animações discretas e acessíveis.
- [ ] Atualização automatizada dos projetos, se justificada.

### Projeto 3 — Gerenciador de tarefas full-stack

**Objetivo:** integrar frontend, API e banco de dados.

Funcionalidades mínimas:
- [ ] Criar tarefa.
- [ ] Listar tarefas.
- [ ] Editar tarefa.
- [ ] Excluir tarefa.
- [ ] Marcar como concluída.
- [ ] Filtrar tarefas.
- [ ] Persistir dados no banco.
- [ ] Validar no cliente e no servidor.
- [ ] Tratar erros e estados de carregamento.
- [ ] Documentar endpoints e execução.

Melhorias futuras:
- [ ] Autenticação.
- [ ] Tarefas por usuário.
- [ ] Paginação ou busca.
- [ ] Testes automatizados.
- [ ] Publicação online.

### Projeto 4 — Sistema para pequeno negócio

**Objetivo:** demonstrar planejamento e integração de várias partes.

Escopo sugerido:
- [ ] Cadastro de produtos.
- [ ] Cadastro de clientes.
- [ ] Registro de vendas.
- [ ] Atualização de estoque.
- [ ] Relatório simples de vendas.
- [ ] Persistência em banco de dados.
- [ ] Validação e tratamento de erros.
- [ ] Controle de acesso se houver usuários.
- [ ] Testes para regras críticas.
- [ ] README e instruções de execução.

**Regra de escopo:** termine uma versão mínima funcional antes de adicionar relatórios complexos, notificações, permissões avançadas ou recursos que não sejam necessários.

---

## 8. Git e GitHub: fluxo de trabalho

### Comandos essenciais

Verifique em que estado está o repositório:

```bash
git status
```

Verifique alterações:

```bash
git diff
```

Adicione arquivos específicos:

```bash
git add README.md
```

Ou adicione todas as mudanças intencionais:

```bash
git add .
```

Revise o que será incluído antes de confirmar:

```bash
git status
git diff --staged
```

Crie um commit descritivo:

```bash
git commit -m "docs: adicionar plano de estudos"
```

Consulte o histórico:

```bash
git log --oneline
```

### Exemplos de mensagens de commit

```text
docs: documentar objetivos do projeto
feat: adicionar cadastro de despesas
fix: corrigir cálculo do saldo
test: cobrir validação de valores
refactor: separar regras de negócio
style: ajustar layout responsivo
```

Use mensagens que descrevam a mudança. Não precisa adotar um padrão rígido desde o primeiro dia, mas mantenha consistência.

### Publicar no GitHub

1. Crie um repositório vazio no GitHub chamado `porquedev-journey`.
2. Siga as instruções que o próprio GitHub mostrar para conectar seu repositório local.
3. Configure autenticação conforme a documentação do GitHub.
4. Confira se o branch local e o remoto estão corretos.
5. Envie as mudanças para o remoto.
6. Abra o repositório no navegador e confira o README.

O comando exato de conexão depende das opções escolhidas na criação do repositório. Siga as instruções exibidas pela plataforma em vez de copiar um endereço remoto fictício.

### Cuidados importantes

- Nunca versione senhas, tokens ou chaves privadas.
- Não use `git push --force` sem entender as consequências.
- Antes de apagar ou substituir arquivos, confira `git status`.
- Faça commits pequenos e coerentes.
- O Git registra histórico; ele não substitui backup nem testes.

---

## 9. Como estudar e usar o ChatGPT

Use o ChatGPT como tutor, revisor e parceiro de depuração — não apenas como gerador de código.

### Para aprender um conceito

```text
Estou estudando [CONCEITO] em JavaScript.
Explique do básico ao intermediário, com exemplos pequenos.
Depois proponha 5 exercícios em ordem de dificuldade.
Não mostre as respostas até eu tentar.
```

### Para receber um desafio

```text
Estou na semana [N] do plano PorQueDev.
Meu nível atual é iniciante/intermediário.
Crie um desafio prático relacionado a [TEMA].
Defina requisitos, critérios de aceitação e casos de teste.
Não entregue a solução completa de início.
```

### Para investigar um erro

```text
Estou tentando [OBJETIVO].
Comportamento esperado: [O QUE DEVERIA ACONTECER].
Comportamento atual: [O QUE ACONTECE].
Erro completo: [MENSAGEM].
Código relevante:
[COLE UM TRECHO MÍNIMO]

Ajude-me a identificar a causa. Explique como investigar e sugira
uma correção, sem reescrever todo o projeto desnecessariamente.
```

Remova senhas, tokens, dados pessoais e informações confidenciais antes de compartilhar código.

### Para revisar seu código

```text
Revise este código como um mentor de programação.
Avalie clareza, nomes, responsabilidade das funções, validação,
casos extremos, segurança e testes.
Priorize os 3 problemas mais importantes.
Explique o motivo de cada sugestão e deixe que eu tente corrigir.
```

### Regra de ouro

Antes de aceitar uma solução sugerida por uma IA:
1. leia e entenda cada parte;
2. execute o código;
3. teste casos normais e extremos;
4. confirme detalhes na documentação;
5. consiga explicar a solução sem olhar a resposta.

---

## 10. Critérios para avançar de fase

Não avance apenas porque a semana acabou. Use estes critérios como verificação.

### Fundamentos
- [ ] Consigo resolver exercícios simples sem copiar.
- [ ] Sei dividir um problema em etapas.
- [ ] Consigo usar funções, arrays e objetos.
- [ ] Consigo explicar como meu código funciona.
- [ ] Sei investigar um erro básico.

### Frontend
- [ ] Consigo criar uma página HTML semântica.
- [ ] Sei usar Flexbox ou Grid.
- [ ] A página funciona em telas pequenas.
- [ ] Consigo manipular o DOM e responder a eventos.
- [ ] Sei validar formulários e apresentar erros.

### APIs e backend
- [ ] Sei explicar cliente, servidor e HTTP.
- [ ] Consigo criar rotas básicas.
- [ ] Sei validar dados no servidor.
- [ ] Consigo executar consultas SQL simples.
- [ ] Sei explicar onde os dados são persistidos.
- [ ] Não exponho credenciais no repositório.

### Projeto e portfólio
- [ ] O projeto funciona seguindo o README.
- [ ] Os recursos principais foram testados.
- [ ] Há mensagens de erro compreensíveis.
- [ ] O histórico Git é legível.
- [ ] Sei explicar decisões e limitações.
- [ ] Consigo demonstrar o projeto em poucos minutos.

Se algum item essencial ainda estiver difícil, revise o conteúdo ou faça um projeto menor. Isso não é atraso: é parte do aprendizado.

---

## 11. Checklist de progresso

Marque as caixas conforme concluir cada etapa. Este checklist pode ser editado diretamente no Markdown.

### Preparação
- [x] Criar a pasta `porquedev-journey`.
- [x] Criar o `README.md`.
- [x] Instalar o editor.
- [x] Instalar Node.js.
- [x] Instalar Git.
- [x] Verificar as versões no terminal.
- [x] Configurar nome e e-mail do Git.
- [x] Criar `.gitignore`.
- [x] Fazer o primeiro commit.
- [x] Criar o repositório remoto.

### Fundamentos — semanas 1 a 4
- [ ] Semana 1: lógica e calculadora.
- [ ] Semana 2: arrays, objetos e estoque.
- [ ] Semana 3: funções, erros e testes.
- [ ] Semana 4: controle financeiro no terminal.

### Web — semanas 5 a 8
- [ ] Semana 5: HTML.
- [ ] Semana 6: CSS responsivo.
- [ ] Semana 7: JavaScript no navegador.
- [ ] Semana 8: lista de tarefas.

### JavaScript e APIs — semanas 9 a 12
- [ ] Semana 9: módulos.
- [ ] Semana 10: assincronismo e API.
- [ ] Semana 11: depuração e testes.
- [ ] Semana 12: painel de dados.

### Backend — semanas 13 a 16
- [ ] Semana 13: Node.js e HTTP.
- [ ] Semana 14: API REST.
- [ ] Semana 15: SQL.
- [ ] Semana 16: persistência e segurança básica.

### Integração — semanas 17 a 20
- [ ] Semana 17: conectar frontend e backend.
- [ ] Semana 18: introdução a React.
- [ ] Semana 19: testes e qualidade.
- [ ] Semana 20: preparar publicação.

### Projeto final — semanas 21 a 24
- [ ] Semana 21: requisitos e planejamento.
- [ ] Semana 22: implementar o fluxo principal.
- [ ] Semana 23: testes e melhorias.
- [ ] Semana 24: documentação e apresentação.

---

## 12. Registro diário de estudos

Crie um arquivo por dia ou por sessão em `diario/`. Não precisa escrever muito; cinco minutos de registro já ajudam a perceber sua evolução.

Copie o modelo:

```markdown
# Registro de estudo — AAAA-MM-DD

## Meta de hoje
O que eu queria aprender ou construir?

## O que estudei
- 

## O que pratiquei
- 

## O que consegui fazer sem ajuda
- 

## Dificuldades e dúvidas
- 

## Erros que resolvi
- 

## Próximo passo
Qual é a primeira tarefa da próxima sessão?

## Autoavaliação
- [ ] Consigo explicar o conceito com minhas palavras.
- [ ] Consigo resolver um exercício semelhante sem copiar.
- [ ] Testei pelo menos um caso extremo.
```

### Revisão semanal

No final de cada semana, responda:
- O que aprendi de verdade?
- O que ainda não consigo explicar?
- Qual erro me ensinou mais?
- Que exercício devo refazer?
- Qual foi a entrega concreta da semana?
- O plano da próxima semana precisa de ajuste?

---

## 13. Glossário inicial

- **Algoritmo:** sequência finita de passos para resolver um problema.
- **Variável:** nome usado para referenciar um valor.
- **Função:** bloco reutilizável de código que executa uma tarefa.
- **Array:** estrutura ordenada que contém vários valores.
- **Objeto:** estrutura que agrupa dados em propriedades.
- **Frontend:** parte da aplicação com a qual a pessoa usuária interage.
- **Backend:** parte que executa regras no servidor e costuma acessar dados.
- **API:** interface definida para que sistemas troquem informações ou solicitem operações.
- **HTTP:** protocolo usado para comunicação entre clientes e servidores na web.
- **Banco de dados:** sistema organizado para armazenar e consultar dados.
- **SQL:** linguagem usada para consultar e modificar dados em bancos relacionais.
- **Git:** sistema de controle de versões.
- **GitHub:** plataforma de hospedagem e colaboração em repositórios Git.
- **Depuração (debugging):** processo de investigar e corrigir problemas.
- **Teste:** verificação do comportamento do programa em determinadas condições.
- **Deploy:** disponibilização de uma aplicação em um ambiente onde possa ser utilizada.
- **Refatoração:** melhoria da estrutura interna do código sem alterar seu comportamento esperado.
- **CRUD:** operações de criar, ler, atualizar e excluir dados.

---

## 14. Links úteis

### Documentação e ferramentas
- [MDN Web Docs — português](https://developer.mozilla.org/pt-BR/)
- [JavaScript Guide — MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide)
- [HTML — MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS — MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Node.js](https://nodejs.org/)
- [Documentação do npm](https://docs.npmjs.com/)
- [Documentação do Git](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/pt)
- [SQLBolt — exercícios interativos de SQL](https://sqlbolt.com/)
- [freeCodeCamp](https://www.freecodecamp.org/)

Use esses links como referência. Não tente ler toda a documentação de uma vez: consulte a seção relacionada ao conceito que estiver praticando.

---

## Compromisso do PorQueDev

Meu objetivo não é apenas terminar um cronograma. Quero aprender a pensar, investigar, construir, testar e explicar soluções de software.

**Minha regra:** entender o problema, tentar resolver, testar o resultado, registrar o aprendizado e melhorar um pouco a cada sessão.

- Data de início: `AAAA-MM-DD`
- Meta de conclusão inicial: `AAAA-MM-DD`
- Projeto atual: `A definir`
- Próxima tarefa: `Configurar o ambiente e começar a Semana 1`

> **Primeiro passo de hoje:** crie a pasta `porquedev-journey`, salve este arquivo como `README.md`, configure Git e comece pelos exercícios de variáveis e operadores. Não precisa preparar tudo perfeitamente antes de escrever a primeira linha de código.
