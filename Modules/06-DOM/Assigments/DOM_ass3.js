const registerButton = document.querySelector('.registerBtn')
const closeButton = document.querySelector('.close-button')
const slideOverContainer = document.querySelector('.slide-over-container')
const wrapper = document.querySelector('.wrapper')
const bgBackdrop = document.querySelector('.bg-backdrop')

closeButton.addEventListener('click', (event) => {
    event.preventDefault()
    slideOverContainer.classList.toggle('slide-out');
    bgBackdrop.style.display = 'none'      
})

registerButton.addEventListener('click', (event) => {
    event.preventDefault()
    slideOverContainer.classList.toggle('slide-in'); 
    slideOverContainer.classList.toggle('slide-out');      
    bgBackdrop.style.display = 'block'   
})

