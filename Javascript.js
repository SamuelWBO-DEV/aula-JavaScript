function load (){
    let Nascimento = document.getElementById("input")

    document.getElementById ("btn").onclick =function(){
        let resultado = 2024 - parseInt (Nascimento.value)
        document.getElementById("idade").innerText = resultado 
    }
}
window.onload = function(){
    load()
}





