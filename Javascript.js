async function userInfor() {
    const result = await fetch("https://randomuser.me/api/?results=50");
    const user = await result.json();

    user.results.forEach((element) => {
        const data = new Date(element.dob.date)
        const divNome = document.createElement("div");
        const divEmail = document.createElement("div");
        const img = document.createElement("img");
        const divData = document.createElement("div");
        divEmail.classList.add("nome")
        divNome.classList.add("nome");
        img.src = element.picture.large;
        divNome.innerText = element.name.first;
        divEmail.innerText = element.email;
        divData.innerText = data.toLocaleDateString();
        document.querySelector("#container").appendChild(divNome);
        document.querySelector("#container").appendChild(divEmail);
        document.querySelector("#container").appendChild(img);
        document.querySelector("#container").appendChild(divData);
    });
    console.log(user.results[0])
}

window.addEventListener("load",()=>{
    userInfor()
})