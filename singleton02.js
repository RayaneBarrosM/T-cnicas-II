class Aluno{
    constructor(){
        if(!Aluno.instancia){
            this.nome = ""
            this.notas = {};
            Aluno.instancia = this;
        }
        return Aluno.instancia;
    }
    definirNome(nome){
        this.nome = nome;
    }

    addNotas(disciplina, notas){
        this.notas[disciplina] = notas;
    }

    calcularMedia(){
        const total = Object.values(this.notas).reduce((acc, nota) => acc + nota,0);
        return total/ Object.keys(this.notas).length;
    }
}

// exemplo de uso - simulando aplicação
const aluno1 = new Aluno();
aluno1.definirNome("Beomgyu")
aluno1.addNotas("Matemática", 8.5);
aluno1.addNotas("História", 7.0);
aluno1.addNotas("Ciências", 9.2);
console.log(`Media de ${aluno1.nome}: ${aluno1.calcularMedia()}`);

const aluno2 = new Aluno();
aluno1.definirNome("Huening Kai")
aluno1.addNotas("Matemática", 9.0);
aluno1.addNotas("História", 5.0);
aluno1.addNotas("Ciências", 8.0);
console.log(`Media de ${aluno2.nome}: ${aluno2.calcularMedia()}`);

console.log(aluno1 === aluno2);