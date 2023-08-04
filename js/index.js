const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".author-name"),
soundIcon = document.querySelector(".fa-volume-up"),
clipboardIcon = document.querySelector(".fa-copy"),
twitterIcon = document.querySelector(".bi-twitter");



// randome quote function
function randomQuote(){
    quoteBtn.innerText = 'Loading Quote...';
    quoteBtn.classList.add("bg-secondary");
    quoteBtn.classList.add("text-light")
    apiUrl = "https://api.quotable.io/random";
    fetch(apiUrl)
    .then(res => res.json())
    .then(result => {
        quoteText.innerText = `${result.content}`;
        authorName.innerText = `${result.author}`;
        quoteBtn.classList.remove("bg-secondary")
        quoteBtn.classList.remove("text-light")
        quoteBtn.innerText = 'New Quote';
    })
}

quoteBtn.addEventListener("click",randomQuote)

soundIcon.addEventListener("click",() => {
    // the SpeechSynthesisUtterance is a web speech api
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

clipboardIcon.addEventListener("click",() => {
    // copy the quote text by clicking clipboard's button
    navigator.clipboard.writeText(quoteText.innerText);
})

twitterIcon.addEventListener("click",() => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`    
    window.open(tweetUrl, "_blank");// open in new twitter tab 

})
