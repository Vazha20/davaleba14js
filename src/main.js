let btnOpen = document.querySelector(".btnOpen");
let box = document.querySelector(".box");
let body = document.querySelector("body");
let close = document.querySelector(".close");

let registerHead = document.querySelector(".register-head");
let registerBody = document.querySelector(".register-body");
let slantLeft = document.querySelector(".slant-left");
let slantRight = document.querySelector(".slant-right");
let first_name = document.querySelector(".first_name");
let last_name = document.querySelector(".last_name");
let bodyText = document.querySelector(".body-text");
let btnClose = document.querySelector(".btnClose");

let registrationBox = document.querySelector(".registration-box");
let confirmationBox = document.querySelector(".confirmation-box");
let btnSubmit = document.querySelector(".btnSubmit");


btnSubmit.addEventListener("click", ()=>{

    bodyText.innerHTML="გამარჯობათ, " + first_name.value + " თქვენ წარმატებით გაიარეთ რეგისტრაცია";
    
    registerHead.style.display="none";    
    registerBody.style.display="none";

    slantLeft.style.display="block";    
    slantRight.style.display="block";    
    
    registrationBox.style.display="none";
    confirmationBox.style.display="block";
});

btnOpen.addEventListener("click", ()=>{
    btnOpen.style.display="none";
    box.style.display="block";
    body.style.backgroundColor="#222";
});
close.addEventListener("click", ()=>{
    btnOpen.style.display="block";
    box.style.display="none";
    body.style.backgroundColor="";
});
btnClose.addEventListener("click", ()=>{
    btnOpen.style.display="block";
    box.style.display="none";
    body.style.backgroundColor="";
});