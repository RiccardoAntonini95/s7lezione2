//ESERCIZIO 1

let userName = localStorage.getItem("username")
const saveButton = document.querySelector("#save-btn")
const deleteButton = document.querySelector("#delete-btn")

saveButton.addEventListener("click", saveUsername)
deleteButton.addEventListener("click", deleteUsername)


function saveUsername(e){
    e.preventDefault()
    let inputValue = document.querySelector("#username").value
    localStorage.setItem("username", inputValue)
    let addedName = localStorage.getItem("username")
    let savedNameElement = document.querySelector("#localName")
    savedNameElement.innerHTML = addedName
}

function deleteUsername(){
    localStorage.removeItem("username")
}

//ESERCIZIO 2
let counter = sessionStorage.getItem("timeCounter")
let time = document.querySelector("#timeDisplay")

function updateCounter(){
    counter ++
    sessionStorage.setItem("timeCounter", counter)
    time.textContent = counter
}

setInterval(updateCounter, 1000)