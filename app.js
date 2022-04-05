//Testing that js is linked to html
console.log("connected!");

const text = document.getElementById("quote");
const author = document.getElementById("author");

const getNewQuote = async () => {

    let url="https://type.fit/api/quotes";


    const response = await fetch(url);
    console.log(typeof response);


    const allQuotes = await response.json();


    const indx = Math.floor(Math.random()*allQuotes.length);


    let quote = allQuotes[indx].text;


    let auth = allQuotes[indx].author;


    if(auth == null) {
        let author = "Anonymous";
    }


    text.innerHTML = quote;
    author.innerHTML = "-"+auth;
}

getNewQuote();