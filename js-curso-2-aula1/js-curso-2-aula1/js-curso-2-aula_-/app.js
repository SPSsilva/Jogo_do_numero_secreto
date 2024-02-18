// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hackeando bicicleta';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um aro de 1 a 10';
// let numeroSecreto = 9;

let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Hackeando bicicleta!');
    exibirTextoNaTela('p', 'Escolha um aro de 1 a 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function numeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}





// function textinho() {
//     return console.log('Olá, mundo!');
// }

// textinho();
// let nome = 'Fabio';

// function getName(name) {
//     console.log('Olá, '+name+'!');
// }

// getName('Julia');

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
// function media(n1, n2, n3) {
//     let mediaN = (n1 + n2 + n3) / 3;
//     alert('A média dos números é '+ mediaN+'.');
// }
// media(5, 4, 3);


// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
// function dobro(numero1, numero2) {
//     let numeroMaior = 0;
//     if (numero1 >= numero2) {
//         numeroMaior =+ numero1;
//     }
//     else {
//         numeroMaior += numero2;
//     }
//     return alert('O maior número é '+numeroMaior+'!');
// }
// dobro(17, 9);

// // Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
// // function porEleMesmo(noo0) {
// //     let mult = noo0 * noo0;
// //     alert('O número resultante da multiplicação é '+mult+'.');
// // }
// // porEleMesmo(5);
// function encontrarMaior(a, b) {
//     return a > b ? a : b;
// }
// let maiorNumero = encontrarMaior(15, 20);
// console.log(maiorNumero);
