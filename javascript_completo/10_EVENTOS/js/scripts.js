// 1 - adicionando eventos 

const bnt = document.querySelector("#my-button");

bnt.addEventListener("click", function() {
    console.log("Clicou aqui!");
});

// 2 - removendo o evento

const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})


// 3 - argumento do evento

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {

    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);

});

// 4 - propagação

const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {

    console.log("Evento 1");

});

btnInsideContainer.addEventListener("click", (e) => {

    // sem isso acontece a propagação

    e.stopPropagation();
    console.log("Evento 2");

});

// 5 - removendo efeito padrão

const a = document.querySelector("a");

a.addEventListener("click", (e) => {

    e.preventDefault()

    console.log("Não alterou a página")
})