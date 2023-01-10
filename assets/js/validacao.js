function verificaChute(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>'
        
        return
    }

    if (numeroMaiorOuMenor(chute)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`

        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML =  `
        <h1>Você acertou!!!</h1>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
    } else if(numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é MAIOR <i class="fa-solid fa-arrow-up"></i></div>
        `
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é MENOR <i class="fa-solid fa-arrow-down"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}