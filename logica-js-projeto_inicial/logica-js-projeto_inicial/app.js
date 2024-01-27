alert("Bem vindo ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random() * 10000 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;
let aleatorio = numeroSecreto < 10 ? '10' : numeroSecreto < 100 ? 100 : numeroSecreto < 1000 ? 1000 : 10000; 

//Condições sem condições, repetições infinitas
while(chute != numeroSecreto){
    chute = prompt("Escolha um número entre 0 e "+aleatorio+".");
    if (chute == numeroSecreto) {
        break;
    }
    else {
        if (chute > numeroSecreto) {
            alert('O número secreto, é menor que o número '+chute+' escolhido!');
        }
        else {
            alert('O número secreto é maior que o número '+chute+' escolhido!');
        }
        alert("Você está na "+tentativas+"° tentativa!");
        tentativas++
    }  
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert ('Parabéns, você descobriu com '+tentativas+' '+palavraTentativa+'!');
