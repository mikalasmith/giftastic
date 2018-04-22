  //Initial array of movies 
    var animal = ["cat", "dog", "elephant", "squirrel"];

    //Function for displaying the GIPHY data
    function renderButtons() {
        $(".button").empty()
        for (var i = 0; i < animal.length; i++) {
            var createButton = $("<button>");
            createButton.addClass("animal").text(animal[i]);
            createButton.attr("data-value", animal[i]);
            $(".button").append(createButton);
        }
    }
    renderButtons();

    // Function that allows the users input to appear on a new dynamically created button.
    $("#add-image").on("click", function (event) {
        console.log("this works!");
        event.preventDefault();
        var newAnimals = $("#animal-input").val().trim();
        if (newAnimals == ""){ //so that user can't add blank button
            return false; 
         }
        animal.push(newAnimals);
        renderButtons();
        return false;
    });

    //Begin AJAX call

     function displayAnimals(){
        var animals = $(this).attr("data-value");  
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animals + "&api_key=lgEohRRUIWLhTxdCIGTn4CUA0TcUNTvf&limit=10";
        console.log("working!");
        console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        
        var results = response.data;
        for (var i=0; i<results.length; i++){

            var animalDiv = $("<div class='newGiphy'>");
     
            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var image = $("<img>").attr("src", static);
            image.addClass("image");

            var animate = results[i].images.fixed_height.url;

            var static = results[i].images.fixed_height_still.url;

            image.attr("data-state", "still")

            image.attr("data-still", static);
            image.attr("data-animate", animate);
            
            
            animalDiv.append(p)
            animalDiv.append(image)

            $(".gifs").prepend(animalDiv);
    



        }
       

    });

};

$(document).on("click", ".animal", displayAnimals);
$(document).on("click", ".image", function(){
    var state = $(this).attr("data-state");
    if (state == 'still') {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still")) ;
        $(this).attr("data-state", "still");
    }
});