class heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade   
        this.tipo = tipo
        this.ataque = ataque

        switch (tipo){
            case "mago":
                this.ataque = "magia"
                break
            case "guerreiro":
                this.ataque = "espada"
                break
            case "monge":
                this.ataque = "artes marciais"
                break
            case "ninja":
                this.ataque = "shuriken"
        }
    }
    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}.`)
    }
}

let novoHeroi = new heroi("José", 32, "mago")

novoHeroi.atacar()