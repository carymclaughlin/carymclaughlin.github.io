var win = 0;
var loss = 0;
var curTotal = 0;
var pushA = 0;
var pushB = 0;
var pushC = 0;
var pushD = 0;
var chosen = 0;

function ready() {
    chosen = Math.floor((Math.random()*100) + 20);
    pushA = Math.floor((Math.random() *16) + 1);
    pushB = Math.floor((Math.random() *16) + 1);
    pushC = Math.floor((Math.random() *16) + 1);
    pushD = Math.floor((Math.random() *16) + 1);
    console.log(chosen, pushA, pushB, pushC, pushD);
    var targetz = document.getElementById("computer-pick");
    targetz.textContent ="Gem's you Must Collect: "+ chosen;
    var targetW = document.getElementById("wins");
    targetW.textContent ="Victories: "+ win;
    var targetl = document.getElementById("losses");
    targetl.textContent ="Losses: "+ loss;
    var targetj = document.getElementById("current-total");
    targetj.textContent = "Current Gem's: "+ curTotal;
    // var targett = document.getElementById("guessLeft");
    // targett.textContent = tries;
    // var targetG = document.getElementById("guessSoFar");
    // targetG.textContent = guessed;
}
$(document).ready(function(){
$(".btn").on("click", function () {
    numberPress = $(this).val();
    if (numberPress == "a"){
        curTotal += pushA
    }
    if (numberPress == "b"){
        curTotal = curTotal + pushB
    }
    if (numberPress == "c"){
        curTotal = curTotal + pushC
    }
    if (numberPress == "d"){
        curTotal = curTotal + pushD
    }  
    console.log(numberPress, curTotal);
    var targetW = document.getElementById("current-total");
    targetW.textContent = "Current Gem's: "+ curTotal;
    
    if(curTotal == chosen) {
        alert("You are a gem!  Soon you will conquer the galaxy");
        win ++;
        curTotal = 0;
        pushA = 0;
        pushB = 0;
        pushC = 0;
        pushD = 0;
        chosen = 0;
        numberPress = "";
        
        ready();
    }
    if(curTotal > chosen){
        alert("Darkness has overcome the galaxy, we must not lose the Gem's!");
        loss ++;
        curTotal = 0;
        pushA = 0;
        pushB = 0;
        pushC = 0;
        pushD = 0;
        chosen = 0;
        numberPress = "";
        ready();
    }
  
    // var targeti = document.getElementById("current-total");
    // targeti.textContent = guessed;
    
    // if (hasOperator === false) {
    //   firstNumber += numberPress;
})

});
    

// function win(){
//     alert("You are a gem!  Soon you will conquer the galaxy");
//     win ++;
//     curTotal = 0;
//     pushA = 0;
//     pushB = 0;
//     pushC = 0;
//     pushD = 0;
//     chosen = 0;
//     ready();
// }
// function lose(){
//     alert("Darkness has overcome the galaxy, we must not lose the Gem's!");
//     loss ++;
//     curTotal = 0;
//     pushA = 0;
//     pushB = 0;
//     pushC = 0;
//     pushD = 0;
//     chosen = 0;
//     ready();
// }