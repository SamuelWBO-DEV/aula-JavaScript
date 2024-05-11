function armazenar() {
    const InputNome = document.querySelector("#input").value;
    //document.body.innerHTML +=`<div class="nome">${InputNome}</div>`
    const divIsnerir = document.createElement("div");
    divIsnerir.className = "nome";
    divIsnerir.innerText = InputNome;
    document.querySelector("#container").appendChild(divIsnerir)
}

function salvarListagem() {
    const dadosListagem = document.querySelector("#container").innerHTML;
    localStorage.setItem("nomesListagem", dadosListagem);
}

function DadosSalvos() {
    document.querySelector("#container").innerHTML= localStorage.getItem("nomesListagem")
}

window.addEventListener("load",()=>{
    DadosSalvos()
})





