let primeiraNota=0
let segundaNota= 0
let terceiraNota= 0
let media= 0

primeiraNota= prompt("digite sua primeira nota")
segundaNota= prompt("digite sua segunda nota")
terceiraNota= prompt("digite sua terceira nota")                 

primeiraNota= parseInt(primeiraNota)
segundaNota= parseInt(segundaNota)
terceiraNota= parseInt(terceiraNota)

media= (primeiraNota + segundaNota + terceiraNota) /3
 alert("sua média é: " + media)

