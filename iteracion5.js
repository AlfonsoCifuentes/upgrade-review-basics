//Iteración #5: función RollDice

function rolldice(numCaras){
    let numero = Math.random();
    numero = numero*numCaras;
    numero = Math.floor(numero) + 1;
    return numero;    
}


