
function chat(){

const msg=document.getElementById("chatInput").value

if(msg.startsWith("define:")){
const q=msg.split(":")[1].trim()

const r=searchVocab(q)[0]

if(!r){
document.getElementById("chatOutput").textContent="Word not found"
return
}

document.getElementById("chatOutput").textContent=
`DE: ${r.de}
ES: ${r.es}
EN: ${r.en}`

return
}

document.getElementById("chatOutput").textContent="Try: define: Vertrag"

}
