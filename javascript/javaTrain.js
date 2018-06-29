
 var now = moment().format("HH:mm")
  console.log(now);
 var config = {
    apiKey: "AIzaSyAn2lVO9nKJ_pqyttSpgQkpGedN7L2mMI0",
    authDomain: "project-1alpha.firebaseapp.com",
    databaseURL: "https://project-1alpha.firebaseio.com",
    projectId: "project-1alpha",
    storageBucket: "project-1alpha.appspot.com",
    messagingSenderId: "516227946558"
  };
  firebase.initializeApp(config);


var database = firebase.database();

// 2. Button for adding Employees
$( document ).ready(function() {
$("#add-Train-btn").on("click", function(event) {
  event.preventDefault();
  console.log("clicked")
  // Grabs user input
  var TrainName = $("#Train-name-input").val().trim();
  // console.log(TrainName);
  var Destination = $("#Destination-input").val().trim();
  // console.log(Destination);
  var firstTrain = moment($("#start-input").val().trim(),"HH:mm").format("HH:mm");
  var convertTrain = moment(firstTrain, "HH:mm").subtract(1, "years");
  // console.log(firstTrain);
  var frequency = $("#rate-input").val().trim();
  // console.log(frequency)
  var now = moment().format("HH:mm")
  // console.log(now);
  let diff = moment().diff(moment(convertTrain), "minutes");
  // console.log(diff);
  let remain = diff % frequency;
  console.log(remain)
  var timeLeft = frequency - remain;
  console.log(timeLeft)
  var nextTrain = moment().add(timeLeft, "minutes");
  var timeTrain = moment(nextTrain).format("HH:mm")
  console.log(timeTrain)
  //var corrected = moment.unix(variable that is unix).format(format desired)

  // Creates local "temporary" object for holding employee data
  var newTrain = {
    name: TrainName,
    role: Destination,
    rate: frequency,
    nextArr : timeTrain,
    minsAway : timeLeft,
  };

  // Uploads employee data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  // console.log(newTrain.name);
  // console.log(newTrain.role);
  // console.log(newTrain.start);
  // console.log(newTrain.rate);

  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#Train-name-input").val("");
  $("#Destination-input").val("");
  $("#start-input").val("");
  $("#rate-input").val("");
  
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
  // console.log(childSnapshot.val());

//   // Store everything into a variable.
  var TrainName = childSnapshot.val().name;
  var Destination = childSnapshot.val().role;
  var arrival = childSnapshot.val().nextArr;
  var frequency = childSnapshot.val().rate;
  var remTrain = childSnapshot.val().minsAway;
  //next arrival
  //minutes away

//   // Employee Info
  // console.log(TrainName);
  // console.log(Destination);
  // console.log(firstTrain);
  // console.log(frequency);

//   // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(TrainName),
    $("<td>").text(Destination),
    $("<td>").text(frequency),
    $("<td>").text(arrival),
    $("<td>").text(remTrain),
  );

//   // Append the new row to the table
  $("#trainBody").append(newRow);
});
})
// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use meets this test case
