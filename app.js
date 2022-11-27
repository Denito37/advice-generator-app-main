// * Variables
const rollBtn = document.getElementById('roll');
const list =document.querySelector('.quoteList');
const likeBtn = document.getElementById('like');
const clear = document.getElementById('clear');
const adviceID = document.querySelector('span');
const quote = document.getElementById('advice');
const rollNum =document.getElementById('number');
let itemsArray = localStorage.getItem('advice') ? JSON.parse(localStorage.getItem('advice')) : [];// * LS
let count = 0;

//localStorage.setItem('advice', JSON.stringify(itemsArray));// * LS
//const data = JSON.parse(localStorage.getItem('advice'));// * LS
for(i = 0; itemsArray.length > i ;i++){
    const node = document.createElement('li');
    node.innerHTML = quote.innerText; 
    list.appendChild(node);
    console.log(itemsArray[i]);
    node.innerHTML = itemsArray[i];
}

// * initial roll
getQuote();

// * Events
document.addEventListener('keydown', keyControls);
rollBtn.addEventListener('click', getQuote);
likeBtn.addEventListener('click', saveQuote);
clear.addEventListener('click', clearTxt);

//*FUNCTIONS
async function getQuote(){
    const res = await fetch("https://api.adviceslip.com/advice" , { cache: "no-cache" });// * no-cache prevent repeated advice
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

    itemsArray.push(node.innerText);
    localStorage.setItem('advice', JSON.stringify(itemsArray));
}
function clearTxt(){
    list.innerHTML= "";
    count = 0;
    rollNum.innerHTML = count;
    localStorage.clear();
    itemsArray = [];
}
function keyControls(control){
    if(control.key === 'Enter'){
        getQuote();
    }
    if(control.key === 's'){
        saveQuote();
    }
    if(control.key === 'Backspace'){
        clearTxt();
    }
}