// Calculadora de partidas Rankeadas

let vitorias = 90
let derrotas = 5
let total = calculoVitorias(vitorias,derrotas)
let nivel = ""

if(total < 10){
	nivel = "Ferro"
}else if(total >10 && total <21){
	nivel  = "Bronze"
}else if(total >20 && total <51){
	nivel  = "Prata"
}else if(total >50 && total <81){
	nivel  = "Ouro"
}else if(total >80 && total <91){
	nivel  = "Diamante"
}else if(total >90 && total <101){
	nivel  = "Lendário"
}else{
	nivel  = "Imortal"
}

console.log("O Herói tem de saldo de " + total + " e está no nível de " + nivel + "!")

function calculoVitorias (vitorias, derrotas){
	let soma = vitorias - derrotas
    return soma
}