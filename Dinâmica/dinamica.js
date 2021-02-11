//1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator
let array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

function somar(...array) {
    return array.reduce((acc, valor) => + acc + valor)
}
somar();
console.log("resposta é:", somar(...array));





//2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
//Formato:
//Nome: [nome]
//ID: [id]
//Região: [area]
//Ingredientes: [ingredientes (string única)]
//Instruções: [instruções]


//Inacabado... :/









//3. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) e retorne uma lista(array) com os nomes dos primeiros 10 resultados.

const fetch = require('node-fetch')

async function fetchDezNomes(url){

   let resp = await fetch(url)
   let resp2 = await resp.json()

   let array = []
//*percorrer array
    for(let i=0; i<10; i++){
    
        array.push(resp2.Meals[i].strMeals)
        console.log(i+1, " ", resp2.Meals[i])
    }

    console.log(array)
}
fetchDezNomes('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')