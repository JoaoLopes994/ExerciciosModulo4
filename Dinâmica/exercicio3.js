const fetch = require('node-fetch')

async function fetchDezNomes(url){
   let resp = await fetch(url)
   let resp2 = await resp.json()

   let array = []
//*percorrer array
    for(let i=0; i<10; i++){
        array.push(resp2.arr[i])
        console.log(i+1, " ", resp2.arr[i])
    }
    console.log(array)
}
fetchDezNomes('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')