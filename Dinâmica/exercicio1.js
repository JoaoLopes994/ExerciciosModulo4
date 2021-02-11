//1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator
let array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

function somar(...array) {
    return array.reduce((acc, valor) => + acc + valor)
}
somar();
console.log("resposta é:", somar(...array));