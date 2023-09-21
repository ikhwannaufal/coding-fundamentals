const myInfo = document.querySelector('#my__info')
const nameText = document.querySelector('#name')
const ageText = document.querySelector('#age')
const hobbiesList = document.querySelector('#hobbies')
const fetchMeButton = document.querySelector('#fetchMeBtn')

const ENDPOINT = 'https://api.github.com/gists/d43686760d5d3665f461dd13ccc91215'

async function getData() {
    const response = await fetch(ENDPOINT)
    const data = await response.json()

    console.log(data)

    return JSON.parse(data.files['me.json'].content);
}

function displayData({name, age, hobbies }) {
    nameText.textContent = name
    ageText.textContent = age

    hobbiesList.textContent = ''
    hobbies.forEach(hobby => {
        // hobbiesList.innerHTML += `
        //     <li>${hobby}</li>
        // `
        const hobbiesObject = document.createElement('li');
        const hobbiesNode = document.createTextNode(hobby);
        hobbiesObject.appendChild(hobbiesNode);

        // Append list object to hobbiesList
        hobbiesList.appendChild(hobbiesObject);
    });
}

window.addEventListener('load', async () => {
    myInfo.classList.add("hide")
})

fetchMeButton.addEventListener('click', async () => {
    const data = await getData()
    displayData(data)
    myInfo.classList.remove("hide")
})