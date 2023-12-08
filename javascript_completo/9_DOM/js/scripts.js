// 1 - movendo-se no DOM

console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - selecionando por tags

const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - selecionando elemento por id

const title = document.getElementById("title");

console.log(title);

// 4 - selecionando elementos por classe

const products = document.getElementsByClassName("product");

console.log(products);

// 5 - selecionando os elementos por CSS

const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - insertBefore

const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// 7 - appendChild

const navlinks = document.querySelector("nav ul");

const li = document.createElement("li")

navlinks.appendChild(li);

// 8 - replaceChild

const h2 = document.createElement("h2");

h2.textContent = "Meu novo título!"

header.replaceChild(h2, title);

// 9 - createTextNode

const myText = document.createTextNode("Agora vamos colocar mais um título");

const h3 = document.createElement("h3");

h3.appendChild(myText);

mainContainer.appendChild(h3);

// 10 - trabalhando com atributos

const firstLink = navlinks.querySelector("a");

console.log(firstLink)

firstLink.setAttribute("href", "https://www.google.com");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank")

// 11 - altura e largura

const footer = document.querySelector("footer");

console.log(footer.offsetWidth);

console.log(footer.offsetHeight);

console.log(footer.clientWidth);

console.log(footer.clientHeight);