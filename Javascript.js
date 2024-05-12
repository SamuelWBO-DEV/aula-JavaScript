function inserirNome() {
    const inputNome = document.querySelector("input").value;
    const divInseri = document.createElement("div");
    divInseri.className = "nome";
    divInseri.innerText = inputNome;
    document.querySelector("#container").appendChild(divInseri)
}

function armazenNomes() {
    const dadosSalvos =  document.querySelector("#container").innerHTML;
    localStorage.setItem("nomes-salvos", dadosSalvos);
}

function armazenCarregamento() {
    document.querySelector("#container").innerHTML = localStorage.getItem("nomes-salvos")
}

    window.addEventListener("load", ()=>{
        armazenCarregamento()
    })