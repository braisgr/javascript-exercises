const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//1
const redPar = document.createElement('p');
redPar.textContent = "¡Oye, soy rojo!";
redPar.classList.add('red-color');

container.appendChild(redPar);

//2
const blueH3 =  document.createElement('h3');
blueH3.textContent = "¡Soy un h3 azul!";
blueH3.classList.add('blue-color');

container.appendChild(blueH3);

//3
const pinkDiv = document.createElement('div');
pinkDiv.classList.add('pink-bg');

//3.1
const h1 = document.createElement('h1');
h1.textContent = "Estoy en un div";

pinkDiv.appendChild(h1);

//3.2
const para = document.createElement('p');
para.textContent = "¡YO TAMBIÉN!";

pinkDiv.appendChild(para);
container.appendChild(pinkDiv);
