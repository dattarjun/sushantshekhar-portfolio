/* ==========================================================
   PORTFOLIO JAVASCRIPT
========================================================== */


/* ==========================================================
   TYPING EFFECT
========================================================== */

const typingElement = document.getElementById("typing");

const words = [
    "AI Enthusiast",
    "RAG Explorer",
    "Software Developer",
    "Python Programmer",
    "Full Stack Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeText() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeText, 1300);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeText,
        deleting ? 55 : 95
    );
}

typeText();


/* ==========================================================
   CURRENT YEAR
========================================================== */

const yearElement =
    document.getElementById("current-year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ==========================================================
   NAVBAR ON SCROLL
========================================================== */

const header =
    document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background =
            "rgba(2, 6, 23, 0.92)";

        header.style.boxShadow =
            "0 10px 35px rgba(0,0,0,0.30)";

    } else {

        header.style.background =
            "rgba(3, 7, 18, 0.72)";

        header.style.boxShadow =
            "none";
    }

});