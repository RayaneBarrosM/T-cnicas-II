//Classe Pessoa -  referencia para ser clonada:
class Pessoa {
  constructor(id, nome, idade) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
  }

  //Metodo para copiar os Objetos:
  clone() {
    return new Pessoa(this.id, this.nome, this.idade);
  }
}

//Classe gerenciamentoPessa para erenciar instancia Pessoa:
class gerenciamentoPessa {
  constructor() {
    this.pessoas = {};
  }

  //Add uma nova pessoa ao dicionario Pessoas:
  addPessoa(id, nome, idade) {
    const pessoa = new Pessoa(id, nome, idade);
    this.pessoas[id] = pessoa;
  }

  //Solicitar uma pessoa pelo id e retorn uma copia dela
  getPessoaById(id) {
    const pessoaOriginal = this.pessoas[id];
    if (pessoaOriginal) {
      return pessoaOriginal.clone(); // Now matches the method name
    } else {
      return null;
    }
  }
}

//Criando uma instancia de gerenciaPessoa:

const manager = new gerenciamentoPessa();

//Add pessoas:

manager.addPessoa(1, 'Ana', 19);
manager.addPessoa(2, 'guilherme', 20);

//Clonado pessoas e modificando copias:
const pessoaClone1 = manager.getPessoaById(1);
if (pessoaClone1) {
  pessoaClone1.nome = 'Natali';
}

//Imprimindo as duas pessoas

console.log('Pessoa Original: ');
console.log(manager.getPessoaById(1));

console.log('Pessoa clonada: ');
console.log(pessoaClone1);
