function calculadora(){
    let resultado= document.getElementById("resultado");
    let resultadoCalculo= 0;
    let operacoes= document.getElementById("operacoes").value;
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    
   if (operacoes=="+") {
    resultadoCalculo=input1+input2
   }

   if (operacoes=="-") {
    resultadoCalculo=input1-input2
   }

   if (operacoes=="*") {
    resultadoCalculo=input1*input2
   }
   if (operacoes=="/") {
    resultadoCalculo=input1/input2
   }

   resultado.innerText= resultadoCalculo
}



