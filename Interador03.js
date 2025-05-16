/*Aplicação de gerenciamento de tarefas em que cada terefa 
contém uma descrição e status(pendente/concluido), e 
prioridade(baixa/média/alta), o padrão Interador deve 
percorrer as tarefas com determinada prioridade, e permitir 
listar as tarefas filtradas. */

//Interface
class Tarefas{
    constructor(descricao, status, prioridade){
        this.descricao = descricao;
        this.status = status;
        this.prioridade = prioridade;
    }
}

varStatus(){
    if(this.status = 0){
        return "pendente"
    } else {
        return concluida
    };
}

verificarPrioridade(){
    if( this.prioridade = 1){
       return "baixa"
    } else if( this.prioridade = 2){
        return "média"
    } else if ( this.prioridade = 3){
        return "alta"
    } else{
        console.error("Numero inválido"); 
    }
}

//Coleção
class ColecaoTarefas{
    constructor(){
        this.tarefas = [];
    }
    adicionar(tarefas){
        this.tarefas.push(tarefas);
    }
    interadorTarefasPrioridade(){
        return new InteradorTarefasPrioridade(this.tarefas);
    }
}

//Interador Concreto
class InteradorTarefasPrioridade{
    constructor(){
        this.tarefas = tarefas;
        this.indice = 0;
    }

    verificarPrioridade(prioridadeUser){
        while(this.indice < this.tarefas.length){
            if(this.tarefas[this.indice].prioridade == prioridadeUser){
                return true;
            } 
            this.indice++
        }
        return false;
    }

    temProximo(){
        return this.indice 
    }

}
    
//Uso
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