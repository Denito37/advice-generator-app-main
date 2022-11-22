const btn = document.getElementById('roll');
const list =document.querySelector('.quoteList');
const likeBtn = document.getElementById('like');
const clear = document.getElementById('clear');
const adviceID = document.querySelector('span');
const quote = document.getElementById('advice');
const rollNum =document.getElementById('number');
let count = 0;

getQuote();

// * Events
btn.addEventListener('click', getQuote);
likeBtn.addEventListener('click', saveQuote);
clear.addEventListener('click', clearTxt);

//*FUNCTIONS
async function getQuote(){
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    count += 1;
    rollNum.innerHTML = count;

    adviceID.innerHTML ='#' + data.slip.id;
    quote.innerHTML = '"' + data.slip.advice + '"';
}
function saveQuote(){
    const node = document.createElement('li');
    node.innerHTML = quote.innerText; 
    list.appendChild(node);
}
function clearTxt(){
    list.innerHTML= "";
    count = 0;
    rollNum.innerHTML = count;
}