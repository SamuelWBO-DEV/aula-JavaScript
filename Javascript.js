function Data() {
    const today = new Date();
    let dia = today.getDate().toString().padStart("2","0");
    let mes = today.getMonth().toString().padStart("2","0");
    let ano = today.getFullYear();
    document.querySelector("#inserirData").innerText=(today.toLocaleDateString());
    
}