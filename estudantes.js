// criação do objeto aluno 
let alunoMaria = {
    nome: "Maria",
    faltas: 2,
    notas: [6,8,7,9]
}

let Aluno = function(posicaoNome,posicaoFaltas,posicaoNotas) {  //criação da função construtora Aluno
    this.nome = posicaoNome;
    this.faltas = posicaoFaltas;
    this.notas = posicaoNotas;
    this.calcularMedia = () => this.notas.reduce((acumulador, elemento) => acumulador + elemento) / this.notas.length;
    this.adicionarFaltas = () => this.faltas++;
}

module.exports = Aluno; // criação do modulo Aluno