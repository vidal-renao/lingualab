
let baseVocab = []
let userVocab = []

async function initDB(){
const res = await fetch("data/vocab.json")
const data = await res.json()
baseVocab = data.entries

userVocab = JSON.parse(localStorage.getItem("userVocab") || "[]")
}

function saveUser(){
localStorage.setItem("userVocab",JSON.stringify(userVocab))
}

function allWords(){
return [...userVocab,...baseVocab]
}

function searchVocab(q){
q=q.toLowerCase()

return allWords().filter(w=>
(w.de && w.de.toLowerCase().includes(q)) ||
(w.es && w.es.toLowerCase().includes(q)) ||
(w.en && w.en.toLowerCase().includes(q))
)
}

function addUserWord(w){
userVocab.push(w)
saveUser()
}

initDB()
