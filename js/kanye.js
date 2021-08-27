const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuate(data))
}
const displayQuate = quote => {
    // console.log(quote.quote); // just for checked
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote

}