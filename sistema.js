// importação dos objetos
let Aluno = require("./estudantes");
let curso = require("./curso");

// criação dos objetos alunos com base na função construtora
let joao = new Aluno("João", 1, [7, 5, 7, 8]);
let maria = new Aluno("Maria", 1, [7, 9, 10, 6])
let mateus = new Aluno("Mateus", 2, [8, 6, 7, 8]);

curso.adicionarAluno(joao, maria, mateus); // adicionar os alunos ao curso (array listaEstud)

/* >extra< relatório imprimindo se tudo tá funcionando como deveria, 
usando o forEach pra percorrer cada item do array listaEstud 
*/
curso.listaEstud.forEach(aluno => {
    let media = aluno.calcularMedia()           // os lets devem estar fora do console.log (funções devem estar fora)
    let aprovado = curso.aprovarAluno(aluno)
    console.log(`
    Nome: ${aluno.nome}
    Faltas: ${aluno.faltas}
    Média: ${media}
    Aprovado: ${aprovado}`)
});