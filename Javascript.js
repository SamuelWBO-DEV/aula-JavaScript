function armazenar() {
    let classInput = document.getElementsByClassName("input");
    let dado=0;
    for (let index = 0; index < classInput.length; index++) {
        dado++
       console.log("Dado " + dado + "= " + classInput[index].value)
    }
}





