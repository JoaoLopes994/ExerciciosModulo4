//Rest & Spread
//Utilizando um operador clone o objeto c​lothes
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};


const clones = [...clothes.pants.colors, ...clothes.shirts.colors, ...clothes.socks.colors]

//

//Novamente utilizando um operador, clone o objeto c​lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks

const segundoClone = [...clothes.pants.colors, ...clothes.shirts.colors, ...clothes.socks.colors]


const shoes = { colors: ['yellow', 'purple'] }


segundoClone.push(shoes)