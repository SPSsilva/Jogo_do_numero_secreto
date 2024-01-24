alert("Bem vindo ao jogo do número secreto");
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt("Escolha um número entre 0 e 10");

//Condições sem condições
if (chute == numeroSecreto) {
    console.log('Parabéns, você acertou! O número secreto é o '+numeroSecreto+'!');
}
else {
    alert('ERROUL');
}
