
var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiplay = document.getElementById("buttonMultiplay");
var buttonDevide = document.getElementById("buttonDevide");
var btn=document.getElementById("btn");

function onButtonPlus() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;


    var result = Number(number1) + Number(number2);
    javob.value=result;
    btn.disabled=false;
}



function onButtonMinus() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;


    var result = Number(number1) - Number(number2);
    javob.value=result;
    btn.disabled=false;
}



function onButtonMultiplay() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;


    var result = Number(number1) * Number(number2);
    javob.value=result;
    btn.disabled=false;
}


function onButtonDevide() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    btn.disabled=false;

    var result = Number(number1) / Number(number2);
    javob.value=result;
}

function onClickBtn(){
    var btn=document.getElementById("btn");
    var number1 = document.getElementById("number1");
    var number2 = document.getElementById("number2");
    btn.disabled=true;
    
    javob.value=0;
    number1.value=" ";
    number2.value=" ";
}



buttonPlus.addEventListener("click", onButtonPlus);
buttonMinus.addEventListener("click", onButtonMinus);
buttonMultiplay.addEventListener("click", onButtonMultiplay);
buttonDevide.addEventListener("click", onButtonDevide);
btn.addEventListener("click", onClickBtn)
