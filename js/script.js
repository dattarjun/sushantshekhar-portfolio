/* =======================================
        PORTFOLIO SCRIPT
======================================= */

console.log("Portfolio Loaded Successfully");

/* Smooth navbar shadow */

window.addEventListener("scroll",function(){

const header=document.querySelector("header");

header.style.boxShadow=window.scrollY>20
?"0 10px 35px rgba(0,0,0,.4)"
:"none";

});


/* Current Year */

document.querySelector("footer").innerHTML=

`© ${new Date().getFullYear()} Sushant Bhanudas Shekhar • All Rights Reserved`;