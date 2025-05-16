class Singleton{
    constructor(){
        console.log("construtor - existe uma instância desse objeto?")
        if(Singleton.instance == null){
            Singleton.instance = this;
            this.value = 0;
            console.log("não. então cria-se o objeto concreto");
        }
        console.log("retorna - Singleton.instance");
        return Singleton.instance;
    }

    increment(){
        this.value += 1;
        console.log(`Value: ${this.value}`);
    }
}

// utilização / cliente
console.log("solicita instancimaneto s1")
const s1 = new Singleton();
console.log("solicita instancimaneto s2")
const s2 = new Singleton();
console.log("solicita instancimaneto s3")
const s3 = new Singleton();

console.log(s1 === s2);
console.log(s1 === s3);

s1.increment();
s1.increment();
s1.increment();
