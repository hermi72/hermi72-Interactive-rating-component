'use strict';

const modal = document.querySelector(".card-component2");
const btns = document.querySelectorAll(".btn-n");
let btnv;
let confirmed = false

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        confirmed = true;
        btnv = String(btns[i].textContent);
        console.log(btnv);
        document.querySelector(".btn-submit").addEventListener("click", function() {
            modal.classList.remove("hidden");
            document.querySelector(".ratingNumber").textContent = btnv;
        });
    });
    
}