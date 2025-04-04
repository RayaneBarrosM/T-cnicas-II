// simulando um e-commerce - carrinho de compras e pizzaria:
class Pizza{
    static instancia = null;

    constructor(){
        if(!Pizza.instancia){
            return Pizza.instancia;
        }

            this.nome = ""
            this.preco = {};
            this.ingredientes = {};
            this.tamanho = ""
            this.borda = ""
            this.molho = ""
            Pizza.instancia = this;
    }

    definirNome(nome){
        this.nome = nome;
    }

    addPreco(valor, preco){
        this.preco[valor] = preco;
    }

    addIngredientes(sabor, ingredientes){
        this.ingredientes[sabor] = ingredientes;
    }

    definirTamanho(tamanho){
        console.log("deseja personalizar o tamanho?")
        if(Pizza.tamanho == Brotinho){
            Pizza.tamanho = this;
            this.value = 5;
            console.log("pizza brotinho selecionada");
        } else if (Pizza.tamanho == Grande){
            Pizza.tamanho = this;
            this.value = 10;
            console.log("pizza grande selecionada");
        } else {
            Pizza.tamanho == Tradicional;
            Pizza.tamanho = this;
            this.value = 0;
            console.log("pizza tradicional selecionada");
        }
        return Pizza.tamanho;
    }

    definirBorda(borda){
        console.log("deseja personalizar a borda?")
        if(Pizza.borda == sem){
            Pizza.borda = this;
            this.value = 2;
            console.log("pizza sem borda selecionada");
        } else if (Pizza.borda == recheada){
            Pizza.borda = this;
            this.value = 7;
            console.log("pizza com borda recheada de queijo selecionada");
        } else {
            Pizza.borda == Tradicional;
            Pizza.borda = this;
            this.value = 0;
            console.log("borda tradicional selecionada");
        }
        return Pizza.borda;
    }

    definirMolho(molho){
        console.log("deseja personalizar o molho?")
        if(Pizza.molho == Temperado1){
            Pizza.molho = this;
            this.value = 2;
            console.log("pizza com molho temperado1 selecionada");
        } else if (Pizza.molho == Temperado2){
            Pizza.molho = this;
            this.value = 2;
            console.log("pizza com molho temperado2 selecionada");
        } else {
            Pizza.molho == Tomate;
            Pizza.molho = this;
            this.value = 0;
            console.log("pizza com molho de tomate tradicional selecionada");
        }
        return Pizza.molho;
    }

    calcularValor(){
        return Object.values(this.preco).reduce((acc, preco) => acc + preco, 0);
    }
}

// utilização
const pizza1 = new Pizza();
pizza1.addIngredientes("29.90")
pizza1.definirNome("Mussarela");
pizza1.addIngredientes("Presunto");
pizza1.addIngredientes("Tomate");
pizza1.addIngredientes("Orégano");
console.log(`Valor da pizza de ${pizza1.nome}: ${pizza1.calcularValor()}`);

const pizza2 = new Pizza();
pizza2.definirNome("Marguerita");
pizza2.addIngredientes("Mussarela");
pizza2.addIngredientes("Tomate");
pizza2.addIngredientes("Manjericão");
pizza2.addIngredientes("Azeite");
console.log(`Valor da pizza de ${pizza2.nome}: ${pizza2.calcularValor()}`);

const pizza3 = new Pizza();
pizza3.definirNome("Calabresa");
pizza3.addIngredientes("Cebola");
pizza3.addIngredientes("Azeitonas");
pizza3.addIngredientes("Orégano");
console.log(`Valor da pizza de ${pizza3.nome}: ${pizza3.calcularValor()}`);
