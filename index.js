/*
const pessoa ={
    nome: "Jéssica",
    idade: 30,
    email: "jessyka_sl@hotmail.com",
}
console.log("Nome: ",pessoa.nome,"\n","Idade: ", pessoa.idade);
console.log("E-mail: ", pessoa.email);


const bicicleta = {
    cor: "Azul",
    marchas: 21,
    estilo: "speed",
}
console.log(bicicleta["estilo"], bicicleta["cor"], bicicleta["marchas"]);

//Alterando valores

bicicleta.marchas = 18;
console.log(bicicleta.marchas);

pessoa.email = "senac@senac.com";
console.log(pessoa.email);
*/

//Exercicios
/*
const filme = {
    direcao: "Sony Films",
    nomeFilme: "A Vida é Bela e Amarela",
    ano: 2023,
    elenco:['Juliana Paes', 'Caio Castro','Suzana Vieira','Glória Menezes'],
    assistiu: "Não",
}
console.log('Filme: ', filme.nomeFilme);
console.log('Ano: ', filme.ano);
console.log('Direção: ', filme.direcao);
console.log('Elenco: ', filme.elenco[0] + '\n'+ filme.elenco[1]+'\n'+ filme.elenco[2]+'\n'+ filme.elenco[3]);  
console.log('Você já assistiu este filme: ', filme["assistiu"]);
*/

//Exercicio 2

//const pessoa = {
//    nome: "Alice",
//    idade: 23,
//    generoMusical: "Pop Rock."
//}
//console.log("O nome da pessoa é ",pessoa.nome+", ela tem ",pessoa.idade,"anos e gosta muito de ",pessoa.generoMusical);

//AULA 02/05 - CONTINUAÇÃO OBJETOS
//Array de objetos
/*
const professores = [
    {nome: "Andrei", modulo: 1},
    {nome: "Vitor", modulo: 2},
    {nome: "Mina", modulo: 3},
]
console.log(professores);
console.log(professores[1]);
console.log(professores[1].nome);
*/
/*
const curso = {
    nome: "Frontend", //String
}
console.log(curso.nome) //Frontend
//ADICIONANDO ATRIBUTO AO OBJETO
curso.numeroEstudantes = 50;
curso["numeroEstudantes"] = 80;

console.log(curso.numeroEstudantes); // 80
*/

//Adicione ao objeto do exercicio 1 uma lista com os nomes dos personagens do filme.
//Acesse e imprima no console cada pessoa do elenco junto com seu respectivo personagem
//Altere a primeira pessoa do elenco por XUXA
/*
const novoFilme = {
    direcao: "Jéssica Schmidt",
    nomeFilme: "Procurando minha memória",
    ano: 2022,
    elenco:['Juliana Paes', 'Caio Castro','Felipe Dylon','Suzana Vieira','Glória Menezes', 'William Bonner'],
    assistiu: "Não",
}
novoFilme.personagens = ["Dory", "Nemo", "Martin", "Ariel", "Sebastião", "Linguado"];
console.log(novoFilme.elenco[0],"como ",novoFilme.personagens[0],
    "\n",novoFilme.elenco[1], "como ",novoFilme.personagens[1],
    "\n",novoFilme.elenco[2],"como ",novoFilme.personagens[2],
    "\n",novoFilme.elenco[3],"como ",novoFilme.personagens[3],
    "\n",novoFilme.elenco[4],"como ",novoFilme.personagens[4],
    "\n",novoFilme.elenco[5],"como ",novoFilme.personagens[5]);
novoFilme.elenco[0] = "Xuxa";
console.log(novoFilme);
console.log(novoFilme.elenco[0],"como ",novoFilme.personagens[0],"\n",novoFilme.elenco[1], "como ",novoFilme.personagens[1],"\n",novoFilme.elenco[2],"como ",novoFilme.personagens[2],"\n",novoFilme.elenco[3],"como ",novoFilme.personagens[3],"\n",novoFilme.elenco[4],"como ",novoFilme.personagens[4],"\n",novoFilme.elenco[5],"como ",novoFilme.personagens[5]);

novoFilme.elenco =[ 
    {ator: "Juliana Paes",
     personagem: "Dory"},
    {ator: "Caio Castro", personagem: "Nemo"}
]
console.log(novoFilme.elenco);
*/

//Espalhamento ou spread... SPRED É os 3.(...)

//let carros =["Monza", "Corsa","GOl"];

//console.log(...carros);

//Exemplo 2

const usuario = {
    nome: "Prof",
    idade: 25,
    email: "prof@senacrs.com",
    cidade: 'São Leopoldo',
    marcas: ["Dell", "LG", "Nokia"],
}
//const usuarioNovo = {
//    ...usuario,
//    nome: "Jéssica",
//}
//console.log(usuarioNovo.nome);

//Exercicio 4

//Crie uma função que receba um objeto de pessoa (Exercício 2) e crie um novo objeto mantendo as propriedades originais e acrescentando:
//Uma propriedade com a lista de suas comidas preferidas; 
//Uma propriedade que seja um objeto, com nome e idade, para representar o melhor amigo da pessoa. 
function novoUsuario(pessoa){
    const novaPessoa ={
        ...pessoa,
        comidasFav:["Pizza", "Xis", "Costelão do Pampa"],
        amigas:{nome:"Fernanda", idade:"30"} 
    }
    return novaPessoa;
}
let teste = novoUsuario(usuario);
console.log(teste);
console.log(`O nome da pessoa é ${teste.nome} e suas comidas preferidas são ${teste.comidasFav} seu melhor amigo se chama
${teste.amigas.nome} e tem ${teste.amigas.idade}. `);