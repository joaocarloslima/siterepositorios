function addCard(repositorio, nomealuno, bio) {
    let team = document.querySelector(".team")

    let div = document.createElement("div")
    div.classList.add("team_member")

    let divImg = document.createElement("div")
    divImg.classList.add("team_img")

    let link = document.createElement("a")
    link.setAttribute("href", "https://github.com/" + repositorio)
    link.setAttribute("target", "_blank")

    let img = document.createElement("img")
    img.setAttribute("src", "https://avatars.githubusercontent.com/" + repositorio)

    let nome = document.createElement("h3")
    nome.innerHTML = nomealuno

    let repo = document.createElement("p")
    repo.classList.add("role")
    repo.innerHTML = repositorio

    let descricao = document.createElement("p")
    descricao.innerHTML = bio

    divImg.append(img)
    link.append(repo)

    div.append(divImg)
    div.append(nome)
    div.append(link)
    div.append(descricao)

    team.append(div)
}

export default addCard