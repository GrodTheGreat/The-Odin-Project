const body = document.querySelector('body');

const pRed = document.createElement('p');
pRed.textContent = "Hey, I'm red!";
body.appendChild(pRed);

const headerBlue = document.createElement('h3');
headerBlue.textContent = "I'm a blue h3!";
headerBlue.style.color = 'blue';
body.appendChild(headerBlue);

const parentDiv = document.createElement('div');
parentDiv.setAttribute('id', 'parent');
parentDiv.setAttribute('style', 'background-color: pink; border: black solid 1px;');

const headerInDiv = document.createElement('h1');
headerInDiv.textContent = "I'm in a div";
parentDiv.appendChild(headerInDiv);

pInDiv = document.createElement('p');
pInDiv.textContent = 'ME TOO!';
parentDiv.appendChild(pInDiv);

body.appendChild(parentDiv);