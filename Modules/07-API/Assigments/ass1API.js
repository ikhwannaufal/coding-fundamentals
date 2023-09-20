let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const ENDPOINT = "https://api.quotable.io/random";

async function getQuote() {
    const response = await fetch(ENDPOINT)
    const data = await response.json()

    console.log(data.content);
    console.log(data.author);
    quote.innerText = data.content;
    author.innerText = data.author;
}

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);