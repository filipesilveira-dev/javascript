//classe que trabalhará as operações realizadas
class contaBancaria{
    #saldo
    constructor(){
        this.#saldo = 0;    //deve declarar um valor
    }

    depositarC(valor){
        this.#saldo += valor;   //operação soma o saldo inicial com o valor depositado
    }
    sacarC(valor){
        this.#saldo -= valor;   //operação subtrai do saldo o valor sacado
    }
    verificarSaldo(valor){      //verificação se tem saldo para o valor de saque
        if(valor <= this.#saldo){
            return true
        } else {
            return false
        }
    }

    //como há um atributo oculto, é necessário um método getter para acessá-lo
    get saldo(){
        return this.#saldo;
    }
}

//classe que trabalhará a interface com o usuário
class caixaEletronico{
    constructor(conta){
        this.conta = conta; //deve declarar um valor
    }

    //recebe o valor depositado e mostra em saldo
    depositarCX(){
        const valorDeposito = parseFloat(document.getElementById('deposito').value);    //agora é preciso pegar esse número e "jogar" lá na classe responsável pelas operações para calcular o saldo após esse depósito
        this.conta.depositarC(valorDeposito);   //este método depositarCX chama dntro dele o depositarC, passando valorDeposito como parâmetro, retornando "saldo += valorDeposito". O método de uma classe chama o método de outra classe (composição de objetos). O "this.conta" indica para o JavaScript onde o método (depositarC()) será executado.
        this.mostrarSaldo(this.conta.saldo);    //chama outro método, mas agora dentro da prórpia classe
    }   
    //recebe o valor a ser sacado e mostra em saldo
    sacarCX(){
        const valorSaque = parseFloat(document.getElementById('saque').value); 
        if(this.conta.verificarSaldo(valorSaque)){
            this.conta.sacarC(valorSaque);
            this.mostrarSaldo(this.conta.saldo);
        } else {
            return this.mostrarSaldo ("Saldo insuficiente!")
        }
    }
    mostrarSaldo(saldo){
        if(typeof saldo === 'number'){
            document.getElementById('saldo').textContent = `Saldo: R$ ${saldo}`;
        } else {
            document.getElementById('saldo').textContent = saldo;
        }
        
        document.getElementById("deposito").value = '';
        document.getElementById("saque").value = '';
    }
}

//vai herdar o #saldo e os métodos de contaBancaria (depositar, sacar e verificarSaldo)
const conta1 = new contaBancaria(); //cria uma conta

//vai herdar a conta e os método de caixaEletronico
const interfaceUsuario = new caixaEletronico(conta1);   //conecta o caixa à conta criada
