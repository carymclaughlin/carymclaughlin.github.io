//start with the array of possible choices
var Letter=[
    "a","b","c","d","e","f","g","h","i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var guessed = [];
var win = 0;
var loss = 0;
var tries = 10;


var chosen = ""
function ready() {
    chosen =Letter[Math.floor(Math.random() * Letter.length)];
    console.log(chosen);
    var targetW = document.getElementById("wins");
    targetW.textContent = win;
    var targetl = document.getElementById("losses");
    targetl.textContent = loss;
    var targett = document.getElementById("guessLeft");
    targett.textContent = tries;
    var targetG = document.getElementById("guessSoFar");
    targetG.textContent = guessed;
}


var keysPress = ""

document.onkeyup = function(event) {
    var lastkey = event.key;
   if(lastkey == chosen){
       alert("Winner! The Letter was " + lastkey)
       winReset();
   }
    else{
        guessed.push(lastkey);
        var targetP = document.getElementById("guessSoFar");
        targetP.textContent = guessed;
        --tries;
        var targetx = document.getElementById("guessLeft");
        targetx.textContent = tries;


        if(tries == 0){
            alert("No Soup for you!  Alphabet Style")
            loseReset();
        }
    }
}
function winReset(){
    win ++;
    tries = 10;
    guessed = []
    ready();
}

function loseReset(){
    loss ++;
    tries = 10;
    guessed = []
    ready();
}
