const btn = document.getElementById('roll');
const adviceID = document.querySelector('span');
const quote = document.getElementById('advice');

getQuote();

async function getQuote(){
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    adviceID.innerHTML ='#' + data.slip.id;
    quote.innerHTML = '"' + data.slip.advice + '"';
}
 btn.addEventListener('click', getQuote);