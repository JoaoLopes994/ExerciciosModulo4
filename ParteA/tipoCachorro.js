//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
  
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
];
  
const catioro = data.filter((elemento) => {
	return elemento.type == "dog";
});

console.log(catioro);









  //Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​
  
data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
  
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
]


const catioro = data.filter((elemento) => {
  return elemento.type = 'dog';

})

const somaIdadesDogs = catioro.reduce((acc, dog) =>{
  return acc+dog.age;

})

console.log(somaIdadesDogs)
console.log()

  //Parte B - Hora do Jogo!
  //Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
var getShirtsColorsAmount = function (company) {
    colors = company.products.shirts.colors;
    return colors.length;
};





