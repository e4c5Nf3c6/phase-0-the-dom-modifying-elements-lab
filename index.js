const element = document.getElementById("main");
element.removeAttribute('id');

const newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory');
newHeader.textContent = "Maria is the champion";

document.body.append(newHeader);