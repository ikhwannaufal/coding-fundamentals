const profileCard = document.querySelector('#sub__container');
const profilePic = document.querySelector('#profile__pic');
const profileUsername = document.querySelector('#username');
const profileBio = document.querySelector('#bio');
const profileJoined = document.querySelector('#date__joined');
const searchForm = document.querySelector('#search__form');
const searchButton = document.querySelector('#search__button');

let userNameInput = document.querySelector('#input_form');

function getUser() {
    
    let ENDPOINT = `https://api.github.com/users/${userNameInput.value}`;
    fetch(ENDPOINT).then((response) => response.json())
    .then((data) => {
        
        console.log(data.avatar_url);
        console.log(data.name);
        console.log(data.bio);
        console.log(data.created_at);

        sub__container.innerHTML = `
        <div id="profile__image">
            <img src="${data.avatar_url}" id="profile__pic" alt="">
        </div>
        <div class="user__details">
            <h3 id="username">${data.name}</h3>
            <p id="bio">${data.bio}</p>
            <p id="date__joined">Joined at: ${convertDate(data.created_at)}</p>
        </div>
        `
    }).catch((error) => {
        console.log(error)
    })
    
}

function convertDate(createdAt) {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let date = new Date(createdAt);
    let createdDay = date.getDate();
    let createdMonth = month[date.getMonth()];
    let createdYear = date.getFullYear();
    return `${createdDay} ${createdMonth} ${createdYear}`;
}

searchButton.addEventListener('click', async (e) => {
    const searchInput = searchForm.querySelector('input').value;
    await getUser(searchInput);
})