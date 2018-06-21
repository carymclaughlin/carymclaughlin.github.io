let correct = 0;
let incorrect = 0;
let unanswered = 0;
let answers = []
function stop() {
    clearInterval(intervalId);
  }
$(document).ready(function(){
    $("#game").hide();
    $("#end").hide();
console.log("hello")
$("#start").on("click", function(){
    $("#game").show();
    $("#start").hide();
    run();
})
  $("#submitButton").on("click", function(){
      console.log("Button Clicked");
    var RadioOutput = $('input[name=q1]:checked').val();
    if (RadioOutput == "true"){
        correct ++;
    }
    if(RadioOutput == "false"){
        incorrect ++;
    }
    if (RadioOutput === undefined){
        unanswered++;
    }
    var RadioOutput2 = $('input[name=q2]:checked').val();
    console.log(RadioOutput2);
    if (RadioOutput2 == "true"){
        correct ++;
    }
    if(RadioOutput2 == "false"){
        incorrect ++;
    }
    if (RadioOutput2 === undefined){
        unanswered++;
    }
    var RadioOutput3 = $('input[name=q3]:checked').val();

    if (RadioOutput3 == "true"){
        correct ++;
    }
    if(RadioOutput3 == "false"){
        incorrect ++;
    }
    if (RadioOutput3 === undefined){
        unanswered++;
    }
    var RadioOutput4 = $('input[name=q4]:checked').val();

    if (RadioOutput4 == "true"){
        correct ++;
    }
    if(RadioOutput4 == "false"){
        incorrect ++;
    }
    if (RadioOutput4 === undefined){
        unanswered++;
    }
    var RadioOutput5 = $('input[name=q5]:checked').val();

    if (RadioOutput5 == "true"){
        correct ++;
    }
    if(RadioOutput5 == "false"){
        incorrect ++;
    }
    if (RadioOutput5 === undefined){
        unanswered++;
    }
    var RadioOutput6 = $('input[name=q6]:checked').val();

    if (RadioOutput6 == "true"){
        correct ++;
    }
    if(RadioOutput6 == "false"){
        incorrect ++;
    }
    if (RadioOutput6 === undefined){
        unanswered++;
    }
    var RadioOutput7 = $('input[name=q7]:checked').val();

    if (RadioOutput7 == "true"){
        correct ++;
    }
    if(RadioOutput7 == "false"){
        incorrect ++;
    }
    if (RadioOutput7 === undefined ){
        unanswered++;
    }
    var RadioOutput8 = $('input[name=q8]:checked').val();

    if (RadioOutput8 == "true"){
        correct ++;
    }
    if(RadioOutput8 == "false"){
        incorrect ++;
    }
    if (RadioOutput8 === undefined){
        unanswered++;
    }
    $("#right").text(`${correct} correct ${incorrect} incorrect ${unanswered} unanswered`);
    $("#game").hide();
    $("#end").show();
    stop();
  })
})

  var number = 60;

  var intervalId;

  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {
    number--;
    $("#timer").html("<h2>" + number + "</h2>");
    if (number === 0) {
      expire();
      stop();
      alert("Time Up!");
    }
  }
  function stop() {
    clearInterval(intervalId);
  }
  function expire(){
    console.log("Button Clicked");
  var RadioOutput = $('input[name=q1]:checked').val();
  if (RadioOutput == "true"){
      correct ++;
  }
  if(RadioOutput == "false"){
      incorrect ++;
  }
  if (RadioOutput === undefined){
      unanswered++;
  }
  var RadioOutput2 = $('input[name=q2]:checked').val();
  console.log(RadioOutput2);

  if (RadioOutput2 == "true"){
      correct ++;
  }
  if(RadioOutput2 == "false"){
      incorrect ++;
  }
  if (RadioOutput2 === undefined){
      unanswered++;
  }
  var RadioOutput3 = $('input[name=q3]:checked').val();

  if (RadioOutput3 == "true"){
      correct ++;
  }
  if(RadioOutput3 == "false"){
      incorrect ++;
  }
  if (RadioOutput3 === undefined){
      unanswered++;
  }
  var RadioOutput4 = $('input[name=q4]:checked').val();

  if (RadioOutput4 == "true"){
      correct ++;
  }
  if(RadioOutput4 == "false"){
      incorrect ++;
  }
  if (RadioOutput4 === undefined){
      unanswered++;
  }
  var RadioOutput5 = $('input[name=q5]:checked').val();

  if (RadioOutput5 == "true"){
      correct ++;
  }
  if(RadioOutput5 == "false"){
      incorrect ++;
  }
  if (RadioOutput5 === undefined){
      unanswered++;
  }
  var RadioOutput6 = $('input[name=q6]:checked').val();

  if (RadioOutput6 == "true"){
      correct ++;
  }
  if(RadioOutput6 == "false"){
      incorrect ++;
  }
  if (RadioOutput6 === undefined){
      unanswered++;
  }
  var RadioOutput7 = $('input[name=q7]:checked').val();

  if (RadioOutput7 == "true"){
      correct ++;
  }
  if(RadioOutput7 == "false"){
      incorrect ++;
  }
  if (RadioOutput7 === undefined ){
      unanswered++;
  }
  var RadioOutput8 = $('input[name=q8]:checked').val();

  if (RadioOutput8 == "true"){
      correct ++;
  }
  if(RadioOutput8 == "false"){
      incorrect ++;
  }
  if (RadioOutput8 === undefined){
      unanswered++;
  }
  $("#game").hide();
  $("#end").show();
  $("#right").text(`${correct} correct ${incorrect} incorrect ${unanswered} unanswered`);
}
