class animal{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        return console.log(`${this.nome} faz som`)        
    }  
    
    informacao(){
        return console.log (`Animal: ${this.nome}`)
    }
}

class cachorro extends animal{  //herança
    falar(){
        return `${this.nome} late`
    }

    informacao(){
        return `Cachorro: ${this.nome}`;
    }
}

class gato extends animal{
    falar(){
        return console.log(`${this.nome} mia`)
    }

    informacao(){
        return `Gato: ${this.nome}`;
    }
}

const animais = [
    new gato ("Tobias"),
    new cachorro ("Táuba"),
    new gato ("Miau"),
];

animais.forEach((animal)=>animal.falar())