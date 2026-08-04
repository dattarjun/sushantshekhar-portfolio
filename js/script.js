const words=[

"AI Enthusiast",

"Full Stack Developer",

"Java Developer",

"Python Programmer",

"Machine Learning Explorer"

];

let i=0;

let j=0;

let current="";

let deleting=false;

function type(){

current=words[i];

if(!deleting){

document.getElementById("typing").textContent=current.substring(0,j++);

if(j>current.length){

deleting=true;

setTimeout(type,1200);

return;

}

}else{

document.getElementById("typing").textContent=current.substring(0,j--);

if(j==0){

deleting=false;

i++;

if(i==words.length)i=0;

}

}

setTimeout(type,deleting?50:100);

}

type();

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.style.background=

window.scrollY>50

?"rgba(3,7,18,.9)"

:"rgba(255,255,255,.05)";

});