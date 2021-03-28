//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors


company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
      shirts: {
        colors: ['red', 'green', 'blue'],
      },
      socks: {
        colors: ['cyan', 'magenta', 'yellow'],
      },
    },
};



const resultado = company.name + ', ' + company.products.shirts.colors[1]

console.log(resultado)

