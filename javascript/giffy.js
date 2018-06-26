let firstAnimals = ["hippo", "cheetah", "lizard", "giraffe", "tiger", "bear", "horse", "goat", "whale", "squid", "owl", "snail", "lamb", "mouse", "rabbit", "frog","turtle", "wolf", "cow", "hawk", "jellyfish", "snake",]
  //ok I know I'm probably supposed to run this through the same function as the click.. and I'm supposed to add new inputs into the array.
  //the problem is by the time I wrote this portion of the code I'd already gotten that funcationality from the 3 point on click function..
  //so I removed my test buttons and ran the array through a duplicate of the function with a loop on ready.
$( document ).ready(function() {
      console.log( "document loaded" );

      for (var i = 0; i < firstAnimals.length; i++) {

      let newButton = $("<button>");

      newButton.text(firstAnimals[i]);

      newButton.addClass("animal-button");
      newButton.addClass("badge badge-dark");
      

      $("#animal-buttons").append(newButton);
      }

  //this was also annoying.  I originally had this style sheet in a script tag in an html file.  I converted it for the assignment to a .js
  // when it was in the script tag, the buttons were populating before this function ran, so it was seperate from the above on ready.
  // I had to add it to the on ready in order for the buttons to populate.
$("#find-animal").on("click", function(event) {

      event.preventDefault();

      var animal = $("#animal-input").val();

      let newButton = $("<button>");

      newButton.text(animal)

      newButton.addClass("animal-button");
      newButton.addClass("badge badge-dark");

      $("#animal-buttons").append(newButton);
      $("#animal-input").val("");
      

});
    });
$(document).on("click", ".animal-button", function(){
  let animal = $(this).text()
  console.log(animal)
//i borrowed your api key
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  animal + "&api_key=dc6zaTOxFJmzC&limit=10";

$.ajax({
  url: queryURL,
  method: "GET"
})

  .then(function(response) {

    var results = response.data;

    console.log(results)

    for (var i = 0; i < results.length; i++) {
  
      if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          // I doubt there are that many R rated buffalos ;)

        var gifDiv = $("<div class='item'>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var animalImage = $("<img>");
        
          //the most challanging portion of the assignment.  I had some issues with the syntax.. but the nice thing was that once
          //it was populating I could use devtools to troubleshoot
        animalImage.attr("src", results[i].images.original_still.url);

        animalImage.attr("data-still", results[i].images.original_still.url);

        animalImage.attr("data-animate", results[i].images.downsized_medium.url);

        animalImage.attr("data-state", "still");

        animalImage.addClass("gif");

        gifDiv.append(p);
        gifDiv.append(animalImage);

        $("#animal-view").prepend(gifDiv);
          }
      }     $(".gif").on("click", function() {
          console.log("clicked");
      //I initially assumed this state changing function could go anywhere.  It did not operate when it wasn't tied into the gif delivery.
              var state = $(this).attr("data-state");
          
              if (state === "still") {
                  $(this).attr("src", $(this).attr("data-animate"));
                  $(this).attr("data-state", "animate");
              } else {
                  $(this).attr("src", $(this).attr("data-still"));
                  $(this).attr("data-state", "still");
              }
              });
      });
});

