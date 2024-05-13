const quote = document.getElementById("quote");
const author = document.getElementById("author");

const URL = "https://thatsthespir.it/api";

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}
getquote(URL);

const button = document.getElementById("myButton");
button.addEventListener('click', function(){
    try {
        getquote(URL);
    }
    catch (error) {
        alert("error")
    }

});