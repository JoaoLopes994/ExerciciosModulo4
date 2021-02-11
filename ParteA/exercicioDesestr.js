//Destructuring - Desestruturação
//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
function handleMouseMove(event) {
    const clientX = event.clientX;
    const clientY = event.clientY;
    console.log(clientX, clientY);
}

const handleMouseMove = ({ clientX, clientY }) => console.log(clientX, " ", clientY);

handleMouseMove();

//Precisei de ajuda para fazer esses exercícios