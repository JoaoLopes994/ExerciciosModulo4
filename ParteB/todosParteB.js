//Parte B - Hora do Jogo!
//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
company = {
	name: "ACME Corp",
	address: "Nowhere st",
	products: {
		shirts: {
			colors: ["red", "green", "blue"],
		},
		socks: {
			colors: ["cyan", "magenta", "yellow"],
		},
	},

}

const getShirtsColorsAmount = (company) => {
    colors = company.products.shirts.colors;
    return colors.length;
};

console.log(getShirtsColorsAmount(company))










//A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};
const {shirts, socks} = clothes;
console.log(shirts, socks)










//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const array = = [...arr].filter((e, i) => {
    return i > 0;
})

const segundoArray = [arr2].filter((e, i) =>{
    return i > 0;
})

console.log(array)
consolee.log(segundoArray)








//A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
var persons = [
    { firstname: 'Malcom', lastname: 'Reynolds' },
    { firstname: 'Kaylee', lastname: 'Frye' },
    { firstname: 'Jayne', lastname: 'Cobb' },
];

const nomeTodo = [...persons].map((elemento) => {
    return elemento.firstname+ "" +elemento.lastname
})

console.log(nomeTodo)



