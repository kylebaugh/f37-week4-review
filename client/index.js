console.log("It's a liopleurodon, Charlie!")

let baseURL = 'http://localhost:2319'

// Step 1: Grab HTML Element
let getDinoBtn = document.querySelector('#getDino')
let dinoDiv = document.querySelector('#dinoDisplay')
let addDinoBtn = document.querySelector('#addButton')
let dinoInput = document.querySelector('#newDino')
let deleteBtn = document.querySelector('#deleteButton')
let deleteInput = document.querySelector('#dinoId')


// Step 2: Write function

const getAllDinos = () => {

    dinoDiv.innerHTML = ''

    axios.get(`${baseURL}/dinos`)
        .then((res) => {
            console.log(res.data)

            for(let i = 0; i < res.data.length; i++){
                let newSpan = document.createElement('p')
                newSpan.textContent = `${i + 1}. ${res.data[i]}`
                dinoDiv.appendChild(newSpan)
                }
            })
        .catch((err) => {
            console.log(err)
        })
}

const addDino = () => {
    dinoDiv.innerHTML = ''

    let bodyObj = {
        name: dinoInput.value
    }

    axios.post(`${baseURL}/dinos`, bodyObj)
        .then((res) => {
            console.log(res.data)

            for(let i = 0; i < res.data.length; i++){
                let newSpan = document.createElement('p')
                newSpan.textContent = `${i + 1}. ${res.data[i]}`
                dinoDiv.appendChild(newSpan)
                }
            })
        .catch((err) => {
            console.log(err)
        })
}

const deleteDino = () => {
    dinoDiv.innerHTML = ''

    let idToDelete = deleteInput.value

    axios.delete(`${baseURL}/dinos/${idToDelete}`)
        .then((res) => {
            console.log(res.data)

            for(let i = 0; i < res.data.length; i++){
                let newSpan = document.createElement('p')
                newSpan.textContent = `${i + 1}. ${res.data[i]}`
                dinoDiv.appendChild(newSpan)
            }
        })
        .catch((err) => {
            console.log(err)
        })
}


// Step 3: Combine with event listeners

getDinoBtn.addEventListener('click', getAllDinos)
addDinoBtn.addEventListener('click', addDino)
deleteBtn.addEventListener('click', deleteDino)



getAllDinos()




