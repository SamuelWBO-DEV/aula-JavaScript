let primeiraNota=0
let segundaNota= 0
let terceiraNota= 0
let media= 0

primeiraNota= parseInt( prompt("digite sua primeira nota") )
segundaNota= parseInt( prompt("digite sua segunda nota"))
terceiraNota= parseInt( prompt("digite sua terceira nota") )                

media=(primeiraNota + segundaNota + terceiraNota) /3
media=parseInt(media)
console.log(media)

if(media > 0 && media <= 5){
    alert("Você foi aprovado")
}

if(media ==6){
    alert("Você ficou em recuperação")
}

if(media >=7){
    alert("Você foi aprovado")
}



