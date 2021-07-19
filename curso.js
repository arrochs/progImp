let curso = {           // criação do objeto curso 
    nomeCurso: "ctd",
    notaAprov: 7,
    faltasMax: 2,
    listaEstud: [],
    adicionarAluno: function (...nomeAluno) {       // adiciona aluno no array listaEstud
        this.listaEstud.push(...nomeAluno)
    },
    aprovarAluno: function (aluno) {            // essa função necessita o parâmetro aluno, que vai rodar o if nele
        let media = aluno.calcularMedia()   // precisa usar esse let fora do if, pq não funciona rodar função no if
        if (aluno.faltas < this.faltasMax && media >= this.notaAprov) {
            return true
        }
        else if (aluno.faltas == this.faltasMax && media >= this.notaAprov * 1.1) {
            return true
        }
        else {
            return false
        }
    },
    
    listarAprovados: function () {  // lista os booleanos correspondentes a aprovação/reprovação com base no aprovarAluno 
        let listaAprov = [];
        this.listaEstud.map(aluno => listaAprov.push(this.aprovarAluno(aluno)))
        return listaAprov
    }
}

module.exports = curso;
