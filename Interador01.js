
//Interface do Interador

class Interador{
    temProximo(){}
    proximo(){}
}

//Coleção concreta com nomes
class ColecaoNomes{
    constructor(){
        this.nomes = [];
    }

    adicionar(nome){
        this.nome.push(nome);
    }

    criarInterador(){
        return new InteradorDeNomes(this.nomes);
    }
}

//Interador Concreto
class InteradorDeNomes extends Interador{
    constructor(nomes){
        super();
        this.nomes = nomes;
        this.indice = 0;
    }

    TemProximo(){
        return this.indice < this.nomes.length;
    }

    proximo(){
        return this.nomes[this.indice++];
    }
}

//Uso do padrão:
const nomes = new ColecaoNomes();
 nomes.adicionar("AAA");
 nomes.adicionar("BBB");
 nomes.adicionar("CCC");
 nomes.adicionar("DDD");
 nomes.adicionar("EEE");

const Interador = nomes.criarInterador();

while(Interador.TemProximo()){
    console.log(Interador.proximo())
}