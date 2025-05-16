//Interface
class Produto{
    constructor(nome, estoque){
        this.nome = nome;
        this.estoque = estoque;
    }

}
//Coleção
class ColecaoProdutos{
    constructor(){
        this.produtos = []
    }
    adicionar(produto){
        this.produtos.push(produto)
    }

    criarInteradorDisponiveis(){
        return new criarInteradorProdutosDisponiveis(this.produtos);
    }
}

//Interador concreto
class InteradorProdutosDisponiveis{
    constructor(produtos){
        this.produto = this.produtos;
        
    }

    temProximo(){
        while(this.indice < this.produtos.length){
            if(this.produtos[this.produtos].estoque > 0 ){
             return true
        }

            this.indice++
        }

        return false
    }

    proximo(){
        return this.produtos[this.indice++]
    }
}

//Uso Padrão
const estoque = new ColecaoProdutos();
estoque.adicionar(new Produto("Camisa", 10));
estoque.adicionar(new Produto("Blusa", 10));
estoque.adicionar(new Produto("Bota", 3));
estoque.adicionar(new Produto("Tenis", 4));

const interador = estoque.criarInteradorDisponiveis();

while(interador.temProximo()){
    const Produto = interador.proximo();
    const nomeFormatado = new produto.nome.substring(0,10).padEnd(10, '');
    const produtoFormatado = String(produto.estoque).substring(0,3).padStart(3, ' ');

    console.log(`Produto: ${nomeFormatado} | Estoque: ${produtoFormatado}`);
}
