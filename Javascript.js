function media() {
let exibirMedia= document.getElementById("media");
let media= 0;
let resultado = document.getElementById("Resultado");
let primeiraNota =parseInt( document.getElementById("Valor1").value);
let segundaNota= parseInt(document.getElementById("Valor2").value); 
let terceiraNota=parseInt(document.getElementById("Valor3").value); 
let quartaNota=parseInt(document.getElementById("Valor4").value);

media=Math.round((primeiraNota + segundaNota + terceiraNota + quartaNota ) /4)

if(media >= 7){
    resultado.innerText= "Você foi APROVADO!!!"
    resultado.style.color= "#529825"
    exibirMedia.innerText= "Sua média é " + media
}

if (media <= 4) {
    resultado.innerText= "Você foi REPROVADO =("
    resultado.style.color= "#fD1010"
    exibirMedia.innerText= "Sua média é " + media
}

if (media > 4 && media < 7) {
    resultado.innerText= "Você ficou de RECUPERAÇÃO"
    resultado.style.color= "#FF9806"
    exibirMedia.innerText= "Sua média é " + media
}

console.log(media)
}




