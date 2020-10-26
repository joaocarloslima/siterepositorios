import data from "./data.js"
import addCard from "./util.js"

data.forEach(aluno => {
    addCard(aluno.repositorio, aluno.nome, aluno.bio)
})


