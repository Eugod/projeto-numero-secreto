const menorValor = 0;
const maiorValor = 100;

const elementoMenorValor = document.getElementById('menorValor');
const elementoMaiorValor = document.getElementById('maiorValor');

const numeroSecreto = numeroAleatorio(menorValor, maiorValor)
  
elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor

function numeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(numeroSecreto);