let display = document.getElementById("display");


// button value add karna

function addValue(value){

    display.value += value;

}


// clear

function clearDisplay(){

    display.value = "";

}


// calculate

function calculate(){

    try{

        display.value = eval(display.value);

    }

    catch{

        display.value="Error";

    }

}


// keyboard support

document.addEventListener("keydown",function(event){


    if(
        event.key >=0 &&
        event.key <=9 ||
        event.key=="+" ||
        event.key=="-" ||
        event.key=="*" ||
        event.key=="/"
    ){

        addValue(event.key);

    }


    if(event.key=="Enter"){

        calculate();

    }


    if(event.key=="Escape"){

        clearDisplay();

    }


});