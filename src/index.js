console.log('%c HI', 'color: firebrick')
// CHALLENGE 1 //
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


let dropdown = document.querySelector("#breed-dropdown")
let imageContainer = document.querySelector("#image-list")

function getDogs() {
    return fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => {
        // console.log(json["message"]),
        showDogs(json["message"])
        }
        )}

let showDogs = (pics) => {
    for (const picture of pics) {
        let img = new Image()
        img.height = 200
        img.src = picture
        imageContainer.appendChild(img) 
    }
}

//   CHALLENGE 2 //
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => {
        console.log(breeds["message"]),
        breedArray = Object.keys(breeds["message"]),
        showBreeds(breeds["message"]),
        displayLetterList(letter)        
    })
}

let showBreeds = (allBreeds) => {
    for (const breed in allBreeds) {
        // console.log(breed)
        ul = document.getElementById("dog-breeds")
        let li = document.createElement("li")
        li.setAttribute("class", "one-dog")
        li.innerText = breed  
        li.addEventListener("click", changeColor)
        li.style.color = "black"
        ul.appendChild(li)
        
        // ul.innerHTML += `<li class="oneDog" style="color:black">${breed}</li>`
    }
}

const changeColor = (event) => {
    if (event.target.style.color = "black") {
    event.target.style.color = "red"
    } else {
        event.target.style.color = "black"
    }
}

//add EvList to dropdown, get value, clear existing list, then return all breeds that have value = string[0] in dogs name

const alphaDog = (event) => {
    console.log(event)
    let letter = event.target.value
        letterArray = []
        breedArray.forEach(dog => {
            
            if (dog.startsWith(letter)) {
                
                letterArray.push(dog)
            }
        })
        ul.innerHTML = ""
        showBreeds(letterArray)
    
}

dropdown.addEventListener("change", alphaDog)

function everything() {
    getDogs(), 
    getBreeds(),
    alphaDog()
}

document.addEventListener("DOMContentLoaded", everything)