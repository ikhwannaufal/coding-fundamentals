const addButton = document.querySelector('.add__button');
const closeButton = document.querySelector('.cta__button');
const notifCard = document.querySelector('.notification');

addButton.addEventListener('click',() => {
    notifCard.classList.add("show");
})

closeButton.addEventListener('click', () => {
    notifCard.classList.remove("show");
})