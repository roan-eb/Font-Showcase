/* javascript for input change */
const dancing = document.getElementById("js--dancing");
const lato = document.getElementById("js--lato");
const merriweather = document.getElementById("js--merriweather");
const input = document.getElementById("js--input");

input.oninput = function(event){
    dancing.innerText = event.target.value;
    lato.innerText = event.target.value;
    merriweather.innerText = event.target.value;
}

/* javascript for favorites */
const hearts = document.getElementsByClassName("heart");
for(let i = 0; i < hearts.length; i++){
    hearts[i].onclick = function(){
        for(let i = 0; i < hearts.length; i++){
            hearts[i].children[0].classList = "fa-regular fa-heart heart__logo"
        }
        hearts[i].children[0].classList = "fa-solid fa-heart heart__logo";
    }
}

const header = document.getElementById("header");
const showcase = document.getElementById("showcase");
const toggle = document.getElementById("toggle");

const output = document.getElementsByClassName("showcase__output");
const font = document.getElementsByClassName("showcase__font");
toggle.onclick = function(){
    if(toggle.checked === true){
       header.style.background = "#2C3333";
       showcase.style.background = "#2C3333";
       input.style.color = "white";
       for(let i = 0; i < output.length; i++){
            output[i].style.color = 'white';
       }
       for(let i = 0; i < font.length; i++){
        font[i].style.color = 'white';
       }


    }
    if(toggle.checked === false){
        header.style.background = "#FBF8F1";
        showcase.style.background = "#FBF8F1";
        input.style.color = "black";
        for(let i = 0; i < output.length; i++){
            output[i].style.color = 'black';
       }
       for(let i = 0; i < font.length; i++){
        font[i].style.color = 'black';
       }


    }
}