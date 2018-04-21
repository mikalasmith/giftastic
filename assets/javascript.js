// query URL with api key
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    //use a console log to check that your ajax call is working and your JS file is linked correctly.
    console.log(response)

    //Initial array of movies 
    var animal = ["cat", "dog", "elephant", "squirrel"];

    //Function for displaying the GIPHY data
    function renderButtons() {
        $(".button").empty()
        for (var i = 0; i < animal.length; i++) {
            var createButton = $("<button>");
            createButton.addClass("animal").text(animal[i]);
            createButton.attr("data", animal[i]);
            $(".button").append(createButton);
        }
    }
    renderButtons();

    // Function that allows the users input to appear on a new dynamically created button.
    $("#animal-input").on("click", function () {
        console.log("this works!");
         event.preventDefault();
        // var newAnimals = $("#animal-input").val().trim())
        // animal.push(newAnimals);
    });












});
